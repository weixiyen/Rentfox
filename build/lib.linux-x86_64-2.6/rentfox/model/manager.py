"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session, request

from rentfox.model import meta
from rentfox.model.property_manager import Property_manager
from rentfox.lib.types_uuid import UUID
import datetime

def now():
    return datetime.datetime.now()

manager_table = schema.Table('manager', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('companyid', UUID(),
        schema.ForeignKey('company.id')),
    schema.Column('username', types.Unicode(50)),
    schema.Column('first_name', types.Unicode(30)),
    schema.Column('last_name', types.Unicode(30)),
    schema.Column('middle_name', types.Unicode(30)),
    schema.Column('suffix', types.Unicode(10)),
    schema.Column('phone', types.Unicode(50)),
    schema.Column('created', types.TIMESTAMP(), default=now),
    schema.Column('email', types.Unicode(100)),
    schema.Column('password_secret', types.Unicode(50)),
    schema.Column('type', types.Unicode(10)),
    schema.Column('created_by', types.Unicode(50)),
    schema.Column('activation_code', UUID()),
    schema.Column('activation_sent', types.TIMESTAMP()),
    schema.Column('reset_password_key', UUID()),
    schema.Column('deleted', UUID())
)

class Manager(object):
    def __init__(self):
        pass
    
    @staticmethod
    def create(**kwargs):
        manager = Manager()
        
        for key in kwargs:
            manager.__setattr__(key, kwargs[key])

        meta.Session.add(manager)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def set_with_username(username, **kwargs):
        manager = Manager.get_manager_with_username(username)
        Manager.set(manager.id, **kwargs)
    
    @staticmethod
    def set(manager_id, **kwargs):
        manager = meta.Session.query(Manager).filter_by(id=manager_id).first()
        for key in kwargs:
            manager.__setattr__(key, kwargs[key])
            if key == 'type':
                authkit_users = request.environ['authkit.users']
                authkit_users.user_set_group(manager.username, kwargs[key])

        meta.Session.commit()
        session.save()
        
    @staticmethod
    def get(id):
        return meta.Session.query(Manager).filter_by(id=id).first()
    
    @staticmethod
    def get_manager_with_username(username):
        result = meta.Session.query(Manager).filter_by(username=username).first()
        if result:
            return result
        else:
            return 0
    
    @staticmethod
    def get_companyid_of_username(username):
        """ Return the companyid of the user.
        """
        manager = Manager.get_manager_with_username(username)
        return manager.companyid
    
    @staticmethod
    def get_admins_of_company(companyid):
        return meta.Session.query(Manager).filter_by(companyid=companyid).filter_by(type="admin").all()
    
    @staticmethod
    def get_id_of_username(username):
        manager = meta.Session.query(Manager).filter_by(username=username).first()
        return manager.id
    
    @staticmethod
    def get_manager_with_email(email):
        return meta.Session.query(Manager).filter_by(email=email).first()
    
    @staticmethod
    def email_exist(email, userid=None):
        manager = meta.Session.query(Manager).filter_by(email=email.lower()).filter_by(companyid=request.environ.get("COMPANY_ID")).first()
        if manager:
            if manager.id == userid:
                return 0
            return 1
        else:
            return 0
    
    @staticmethod
    def is_admin(id):
        result = meta.Session.query(Manager).filter_by(id=id).filter_by(type='admin').first()
        if result:
            return 1
        else:
            return 0
        
    @staticmethod
    def get_user_by_activation_code(code):
        result = meta.Session.query(Manager).filter_by(activation_code=code).first()
        if result:
            return result
        else:
            return 0
    
    @staticmethod
    def get_managers_of_property(propertyid):
        records = Property_manager.get_records_with_propertyid(propertyid)
        manager_list = []
        for record in records:
            if not Manager.is_admin(record.manager_id):
                manager = meta.Session.query(Manager).filter_by(id=record.manager_id).first()
                manager_list.append(manager.id)
        return manager_list
    
    @staticmethod
    def get_managers_of_company(companyid):
        managers = meta.Session.query(Manager).filter_by(companyid=companyid).filter_by(type="manager").order_by('first_name').all()
        manager_list = []
        for manager in managers:
            manager_list.append(manager.id)
        return manager_list
    
    @staticmethod
    def username_exist(username):
        username = Manager.get_manager_with_username(username)
        if username:
            return 1
        return 0
    
    @staticmethod
    def has_permission(username1, userid2):
        """ Return whether username1 has permission over username2
        """
        user1 = Manager.get_manager_with_username(username1)
        user2 = Manager.get(userid2)
        
        if not user1 or not user2:
            return 0
        if user1.created_by == 'rentfox':
            return 1
        if user2.created_by == user1.id:
            return 1
        if user1.type == 'admin' and user2.type == 'manager':
            return 1
        if username1 == username2:
            return 1
        return 0
    
    @staticmethod
    def set_activation_sent_date(id):
        manager = meta.Session.query(Manager).filter_by(id=id).first()
        manager.activation_sent = datetime.datetime.now()
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def set_reset_password_key(id, key):
        manager = meta.Session.query(Manager).filter_by(id=id).first()
        manager.reset_password_key = key
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get_manager_by_password_key(key):
        return meta.Session.query(Manager).filter_by(reset_password_key=key).first()
    