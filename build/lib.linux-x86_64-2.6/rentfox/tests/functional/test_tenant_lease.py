from rentfox.tests import *

class TestTenantLeaseController(TestController):

    def test_index(self):
        response = self.app.get(url(controller='tenant_lease', action='index'))
        # Test response...
