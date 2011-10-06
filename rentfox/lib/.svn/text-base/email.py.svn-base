import smtplib, string
from pylons import request
from rentfox import model, settings

FROMADDR = 'Rentfox <{0}>'.format(settings.EMAIL_NO_REPLY)        
SUPPORTEMAIL = settings.EMAIL_SUPPORT
SMTPSERVER = settings.SMTP_SERVER 

def send(toaddrs, subj, msg):
   s_toaddrs = string.join(toaddrs, ",")
   msg = """\
To: %s
From: %s
Subject: %s

%s
""" % (s_toaddrs, FROMADDR, subj, msg)
   try:
      server = smtplib.SMTP(SMTPSERVER)
      # If your mail server requires a username/login, you'll need the following line.
      #server.login('donnlee', 'mypassword')
      server.sendmail(FROMADDR, toaddrs, msg)
      server.quit()
      return 1
   except:
      return 0
  
def sendActivationLink(userid):
    manager = model.Manager.get(userid)
    activation_link = 'http://{0}/activate/{1}'.format(settings.WEBSITE,manager.activation_code)
    
    subj = "Activate your Rentfox account"
    msg = """
Dear {0},

Welcome to Rentfox!

You have been given access to manage properties for {1}.

Please activate your Rentfox account at this URL:
{2}

Thanks,
Rentfox

{3}
""".format(manager.first_name, request.environ.get("COMPANY_NAME"), activation_link, settings.WEBSITE)
    
    errors = 0
    if not send([manager.email],subj, msg):
        errors = [{"message":"Sorry, we could not send an activation code to the recipient via email\
            please manually send the activation email to him / her."}]
    else:
        model.Manager.set_activation_sent_date(userid)
    
    return errors

def sendWelcome(email, userid, first_name, company, username, password):
    
    subj = "{0} - Welcome to Rentfox!".format(company)
    msg = """
Dear {0},

Welcome to Rentfox!

You are the account owner for {1}.

Here is your login information below...
Username - {2}
Password - {3}

Keep your login information somewhere safe.

Email us anytime at {4} for any questions.

To login, please go to http://{5}.

Thanks,
Rentfox

{4}
""".format(first_name, company, username, password, SUPPORTEMAIL, settings.WEBSITE)
    
    errors = 0
    if not send([email],subj, msg):
        errors = [{"message":"Sorry, we could not send your welcome email."}]
    else:
        model.Manager.set_activation_sent_date(userid)
    
    return errors