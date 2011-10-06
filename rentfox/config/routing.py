"""Routes configuration

The more specific and detailed routes should be defined first so they
may take precedent over the more generic routes. For more information
refer to the routes manual at http://routes.groovie.org/docs/
"""
from pylons import config
from routes import Mapper

def make_map():
    """Create, configure and return the routes Mapper"""
    map = Mapper(directory=config['pylons.paths']['controllers'],
        always_scan=config['debug'])
    map.minimization = False

    # The ErrorController route (handles 404/500 error pages); it should
    # likely stay at the top, ensuring it can always be resolved
    map.connect('/error/{action}', controller='error')
    map.connect('/error/{action}/{id}', controller='error')

    # CUSTOM ROUTES HERE
    map.connect('/signout', controller='account', action='signin')
    map.connect('/signin', controller='account', action='signin')
    map.connect('/', controller='marketing', action='homepage')
    map.connect('/handler/{controller}', action='handler')
    map.connect('/dashboard', controller='dashboard', action='index')
    map.connect('/users', controller='user', action='index')
    map.connect('/users/{propertyId}', controller='user', action='index')
    map.connect('/property', controller='property', action='index')
    map.connect('/reports', controller='reports', action='transactions')
    map.connect('/contacts', controller='contacts', action='index')
    map.connect('/contacts/json/{type}', controller='contacts', action='json')
    map.connect('/activate/{id}', controller='account', action='activate')
    map.connect('/newPassword/{id}', controller='account', action='newPassword')
    map.connect('/account', controller='account', action='manage')
    map.connect('/company', controller='company', action='manage')
    map.connect('/search', controller='search', action='index')
    map.connect('/help', controller='help', action='index')
    map.connect('/autocomplete', controller='search', action='autocomplete')
    map.connect('/{controller}/{action}')
    map.connect('/{controller}/{action}/{id}')
    map.connect('/{controller}/{action}/{id}/{unitId}', controller='property', action='setup')

    return map
