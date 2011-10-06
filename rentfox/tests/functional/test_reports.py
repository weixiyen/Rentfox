from rentfox.tests import *

class TestReportsController(TestController):

    def test_index(self):
        response = self.app.get(url(controller='reports', action='index'))
        # Test response...
