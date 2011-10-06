import logging, datetime
from pylons import request, response, session, tmpl_context as c
from pylons.controllers.util import abort, redirect_to, redirect

from rentfox.lib.base import BaseController, render
from rentfox import model

import rentfox.model.meta as meta
import rentfox.lib.helpers as h

from pylons.decorators import validate
from pylons.decorators.rest import restrict
from sqlalchemy import delete

from pylons import tmpl_context as c
from datetime import date

log = logging.getLogger(__name__)

class DashboardController(BaseController):
    @h.authorize(h.is_manager)
    @h.authenticate
    def __before__(self):
        c.page_title = 'Dashboard'

    def index(self):
        companyid = request.environ.get('COMPANY_ID')
        proplist = model.Property.get_properties_of_username(request.environ.get('REMOTE_USER'))
        properties = []
        for prop in proplist:
            active_leases = model.Lease.totalActiveLeasesInProperty(prop.id)
            total_units = model.Property.totalUnits(prop.id)
            occupancy = total_units > 0 and (active_leases * 100 / total_units) or 0
            
            properties.append({
                              'id': prop.id,
                              'name': prop.name,
                              'type': prop.type,
                              'photo': prop.thumbid and model.Photo.path(prop.thumbid) or '',
                              'totalUnits': total_units,
                              'totalTenants': model.Tenant_lease.totalActiveTenantsInProperty(prop.id),
                              'percentOccupied': "{0}%".format( occupancy )
                              })

        active_leases = model.Lease.totalActiveLeasesInCompany(companyid)
        total_units = model.Company.totalUnitsInCompany(companyid)
        occupancy = total_units > 0 and (active_leases * 100 / total_units) or 0
        
        c.properties = properties
        c.totalUnits = total_units
        c.totalTenants = model.Tenant_lease.totalTenantsInCompany(companyid)
        c.occupancy = "{0}%".format( occupancy )
        
        this_month = date.today().month
        
        c.rentPaid = model.Company.totalRentPaidInMonth(2010,this_month)
        c.rentDue = model.Company.totalActiveLeasesInMonth(2010,this_month)
        rent_percent = c.rentDue > 0 and (c.rentPaid * 100 / c.rentDue) or 0
        c.rentPercent = '{0}%'.format(rent_percent)
        c.currentMonth = datetime.date.today().strftime('%B')
        
        c.menuDashboard = 'on'
                
        return render('/dashboard.html')

    def secure(self):
        return 'Secure page, admin only'
