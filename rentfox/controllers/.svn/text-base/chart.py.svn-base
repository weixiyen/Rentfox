import logging, json, datetime

from pylons import request, response, session, tmpl_context as c, url
from pylons.controllers.util import abort, redirect
from rentfox.model.property import Property
from rentfox.lib.base import BaseController, render
from rentfox.lib.date import monthToString

log = logging.getLogger(__name__)

class ChartController(BaseController):

    def monthlyOccupancy(self):
        
        propertyid = request.POST['propertyid']
        
        # get current month / year
        today = datetime.date.today()
        this_month = today.month
        prev_year = today.year - 1
        
        months_arr = []
        occupancy_data = []
        
        for i in xrange(1, 13):
            current_month = this_month + i
            current_year = prev_year
            if current_month > 12:
                current_month = current_month - 12
                current_year = prev_year + 1
            months_arr.append(current_month)
            current_percentage = Property.occupancyPercentage(propertyid, current_year, current_month)
            occupancy_data.append(current_percentage)
        
        months_arr = map(monthToString, months_arr)
                
        return json.dumps({
            'xAxis': months_arr,
            'series': [{
                'name': 'Occupancy',
                'data': occupancy_data
            }]
        })
