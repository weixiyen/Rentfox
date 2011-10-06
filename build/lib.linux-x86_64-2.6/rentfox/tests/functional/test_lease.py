from rentfox.tests import *

class TestLeaseController(TestController):

    def test_index(self):
        response = self.app.get(url(controller='lease', action='index'))
        # Test response...
