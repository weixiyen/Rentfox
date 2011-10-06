from rentfox.tests import *

class TestTransactionController(TestController):

    def test_index(self):
        response = self.app.get(url(controller='transaction', action='index'))
        # Test response...
