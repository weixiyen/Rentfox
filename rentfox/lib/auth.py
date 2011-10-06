"""provides authentication parameters, access through helper.
"""
from pylons.templating import render_mako as render
from pylons import request, tmpl_context as c


def signin():
    c.path = request.environ.get('PATH_INFO') and request.environ.get('PATH_INFO') or '/dashboard'
    if request.POST.has_key('username') or request.POST.has_key('password'):
        c.error = 'Incorrect username or password.'
    
    return render('/signin.html')