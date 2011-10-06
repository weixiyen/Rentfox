"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types
from pylons import session

from rentfox.model import meta
from rentfox.lib.types_uuid import UUID
import datetime

def now():
    return datetime.datetime.now()


contact_transaction_table = schema.Table('contact_transaction', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('contactid', UUID(),
        schema.ForeignKey('contact.id'), nullable=False),
    schema.Column('transactionid', UUID(),
        schema.ForeignKey('transaction.id'), nullable=False),
    schema.Column('deleted', UUID())
)


class Contact_transaction(object):
    pass