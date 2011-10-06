"""Setup the SimpleSite application"""
import logging
import os.path
import string, random
from rentfox import model
from rentfox.config.environment import load_environment
from authkit.users.sqlalchemy_driver import UsersFromDatabase

log = logging.getLogger(__name__)

def setup_app(command, conf, vars):
    """Place any commands to setup simplesite here"""
    load_environment(conf.global_conf, conf.local_conf)

    # Load the models
    from rentfox.model import meta
    meta.metadata.bind = meta.engine
    
    log.info("Adding the AuthKit model...")
    users = UsersFromDatabase(model)
    
    filename = os.path.split(conf.filename)[-1]
    if filename == 'dev.ini':
        # Permanently drop any existing tables
        log.info("Dropping existing tables...")
        meta.metadata.drop_all(checkfirst=True)
    
    # Continue as before
    # Create the tables if they aren't there already
    meta.metadata.create_all(checkfirst=True)
    
    log.info("Adding groups admin & manager")
    users.group_create('admin')
    users.group_create('manager')
    users.group_create('deleted')
    
    meta.Session.commit()
    log.info("Successfully set up.")
