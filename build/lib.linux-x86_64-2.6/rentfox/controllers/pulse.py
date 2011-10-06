from pylons import request, response, session, tmpl_context as c
from rentfox.lib.base import BaseController, render
from rentfox import model
import logging
import json

log = logging.getLogger(__name__)

class PulseController(BaseController):
    def get(self):
        
        # get params
        type = request.POST.has_key('type') and request.POST['type'] or None
        limit = request.POST.has_key('limit') and request.POST['limit'] or None
        propertyid = request.POST.has_key('propertyid') and request.POST['propertyid'] or None
        unitid = request.POST.has_key('unitid') and request.POST['unitid'] or None
        
        return json.dumps(model.Pulse.get(type, limit, propertyid, unitid))