from rentfox.tests import *

class TestCompanyController(TestController):

    def test_index(self):
        response = self.app.get(url(controller='company', action='index'))
        # Test response...
