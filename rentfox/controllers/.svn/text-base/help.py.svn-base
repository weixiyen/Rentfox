import logging

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect

from rentfox.lib.base import BaseController, render
from rentfox.lib import helpers as h

log = logging.getLogger(__name__)

class HelpController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.page_title = 'Help, Support, and FAQs'
    def index(self):
        c.menuHelp = 'on'
        return render('/help.html')
