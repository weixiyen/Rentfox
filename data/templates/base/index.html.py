from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 5
_modified_time = 1248197032.671
_template_filename='C:\\fox\\rentfox\\rentfox\\templates/base/index.html'
_template_uri='/base/index.html'
_template_cache=cache.Cache(__name__, _modified_time)
_source_encoding='utf-8'
from webhelpers.html import escape
_exports = ['flash', 'header', 'head', 'footer', 'title']


def render_body(context,**pageargs):
    context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        self = context.get('self', UNDEFINED)
        next = context.get('next', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 2
        __M_writer(u'\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n"http://www.w3.org/TR/html4/strict.dtd">\n<html>\n<head>\n    <title>')
        # SOURCE LINE 7
        __M_writer(escape(self.title()))
        __M_writer(u'</title>\n    ')
        # SOURCE LINE 8
        __M_writer(escape(self.head()))
        __M_writer(u'\n</head>\n<body>\n    ')
        # SOURCE LINE 11
        __M_writer(escape(self.header()))
        __M_writer(u'\n    ')
        # SOURCE LINE 12
        __M_writer(escape(next.heading()))
        __M_writer(u'\n    ')
        # SOURCE LINE 13
        __M_writer(escape(self.flash()))
        __M_writer(u'\n    ')
        # SOURCE LINE 14
        __M_writer(escape(next.body()))
        __M_writer(u'\n    ')
        # SOURCE LINE 15
        __M_writer(escape(self.footer()))
        __M_writer(u'\n</body>\n</html>\n\n')
        # SOURCE LINE 19
        __M_writer(u'\n')
        # SOURCE LINE 22
        __M_writer(u'\n')
        # SOURCE LINE 23
        __M_writer(u'\n')
        # SOURCE LINE 24
        __M_writer(u'\n')
        # SOURCE LINE 33
        __M_writer(u'\n\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_flash(context):
    context.caller_stack._push_frame()
    try:
        session = context.get('session', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 25
        __M_writer(u'\n')
        # SOURCE LINE 26
        if session.has_key('flash'):
            # SOURCE LINE 27
            __M_writer(u'    <div id="flash"><p>')
            __M_writer(escape(session.get('flash')))
            __M_writer(u'</p></div>\n    ')
            # SOURCE LINE 28

            del session['flash']
            session.save()
                
            
            # SOURCE LINE 31
            __M_writer(u'\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_header(context):
    context.caller_stack._push_frame()
    try:
        h = context.get('h', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 23
        __M_writer(u'<div id="header"><a href="')
        __M_writer(escape(h.url_for(controller='dashboard', action='view', id=None)))
        __M_writer(u'">Home</a></div>')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_head(context):
    context.caller_stack._push_frame()
    try:
        h = context.get('h', UNDEFINED)
        __M_writer = context.writer()
        # SOURCE LINE 20
        __M_writer(u'\n    ')
        # SOURCE LINE 21
        __M_writer(escape(h.stylesheet_link(h.url_for('/css/global.css'))))
        __M_writer(u'\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_footer(context):
    context.caller_stack._push_frame()
    try:
        __M_writer = context.writer()
        # SOURCE LINE 24
        __M_writer(u'<div id="footer"></div>')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_title(context):
    context.caller_stack._push_frame()
    try:
        __M_writer = context.writer()
        # SOURCE LINE 19
        __M_writer(u'Rentfox')
        return ''
    finally:
        context.caller_stack._pop_frame()


