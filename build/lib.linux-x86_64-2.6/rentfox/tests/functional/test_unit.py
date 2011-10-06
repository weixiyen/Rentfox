from rentfox.tests import *

class TestUnitController(TestController):

    def test_index(self):
        response = self.app.get(url(controller='unit', action='index'))
        # Test response...
