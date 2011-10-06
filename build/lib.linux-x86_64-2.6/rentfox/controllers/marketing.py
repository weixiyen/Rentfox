import logging

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import redirect

from rentfox.lib.base import BaseController, render
import rentfox.lib.helpers as h

import json
from rentfox import settings
from rentfox.lib import email as mailman, valid

log = logging.getLogger(__name__)

class MarketingController(BaseController):
    
    def homepage(self):
        if request.environ.get("REMOTE_USER"):
            redirect("/dashboard")
        return render('/homepage.html')
    
    def sendLead(self):
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        message = request.POST['message']
        
        errors = []
        if not valid.email(email):
            errors.append({"selector":"#lead-email", "message":"Please enter a valid email."})
        if len(name) < 3:
            errors.append({"selector":"#lead-name", "message":"Please enter a valid name"})
        
        lead_subj = "Rentfox Lead Inquiry - {0}".format(name)
        lead_msg = """\
Dear Rentfox Sales,

A potential customer would like to be contacted!
Please do your best to provide excellent service and leave a good impression no matter the outcome.

Name: {0}
Email: {1}
Phone (optional): {2}

Message (optional):
{3}

Best Regards,

Rentfox
""".format(name, email, phone, message)

        thanks_subj = "Thanks for your inquiry!"
        thanks_msg = """\
Dear {0},

Thank you for your inquiry regarding Rentfox.
Rentfox is the easy way to manage rental properties online.

We value your business and will respond quickly. We are happy to be of service!

You will hear back from us sometime within the next 24 hours.

Best Regards,

The Rentfox Team
http://{1}
""".format(name, settings.WEBSITE)


        if len(errors) == 0:
            mailman.send([settings.EMAIL_SALES], lead_subj, lead_msg)
            mailman.send([email], thanks_subj, thanks_msg)
        
        return json.dumps({'errors':errors})
        