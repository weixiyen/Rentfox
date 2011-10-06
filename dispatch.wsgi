# Avoid ``[Errno 13] Permission denied: '/var/www/.python-eggs'`` messages
import os, sys
sys.path.append('/var/apps/rentfox_dev')
os.environ['PYTHON_EGG_CACHE'] = '/var/apps/rentfox_dev/python-eggs'

# Load the Pylons application
from paste.deploy import loadapp
application = loadapp('config:/var/apps/rentfox_dev/production.ini')
