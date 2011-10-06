"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm, schema, types, select
from pylons import session, request

from rentfox.model import meta
from rentfox.model.manager import Manager
from rentfox.lib.types_uuid import UUID
import datetime, uuid

def now():
    return datetime.datetime.now()
    
recycle_table = schema.Table('recycle', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('description', types.Unicode(100)),
    schema.Column('userid', UUID(), schema.ForeignKey('manager.id')),
    schema.Column('userip', types.Unicode(30)),
    schema.Column('created', types.TIMESTAMP(), default=now)
)

class Recycle(object):
    def __init__(self):
        pass
    
    @staticmethod
    def create(description):
        recycleId = str(uuid.uuid1())
        
        recycle = Recycle()
        
        recycle.id = recycleId
        recycle.description = description
        recycle.userid = Manager.get_id_of_username(request.environ.get("REMOTE_USER"))
        recycle.userip = request.environ.get("REMOTE_ADDR")

        meta.Session.add(recycle)
        meta.Session.commit()
        session.save()
        return recycleId
    
    @staticmethod
    def delete(recycleId):
        recycle = meta.Session.query(Recycle).filter(Recycle.id==recycleId).first()
        meta.Session.delete(recycle)
        meta.Session.commit()
        session.save()
