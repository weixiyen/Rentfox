import twilio
import logging
import datetime
import calendar
import smtplib
import string
import settings
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

'''
EMAIL FUNCTION
'''
def sendEmailReminder(toaddrs):
   s_toaddrs = string.join(toaddrs, ",")
   msg = """\
To: %s
From: %s
Subject: Rent payment due soon (reminder)

This is just a friendly reminder that rent is due in %s days.

Thank you,
Rentfox
""" % (s_toaddrs, FROMADDR, DUE_IN)
   try:
        server = smtplib.SMTP(SMTPSERVER)
        server.sendmail(FROMADDR, toaddrs, msg)
        server.quit()
        return 1
   except:
      return 0

'''
TWILIO SETUP
'''

LOG_FILENAME = '/tmp/smslog.out'
logging.basicConfig(filename=LOG_FILENAME, level=logging.DEBUG)

API_VERSION = settings.TWILIO_API_VERSION
ACCOUNT_SID = settings.TWILIO_SID
ACCOUNT_TOKEN = settings.TWILIO_TOKEN
ACCOUNT_PHONE = settings.TWILIO_PHONE
DUE_IN = 3

FROMADDR = 'Rentfox <{0}>'.format(settings.EMAIL_NO_REPLY)        # Author is Donn Lee.
SMTPSERVER = settings.SMTP_SERVER #'mail.myisp.net'    # Put your own email server here.

account = twilio.Account(ACCOUNT_SID, ACCOUNT_TOKEN)

'''
get all phone numbers of current users who have lease due in DUE_IN days, default 3
'''

db = create_engine(settings.DB_CONN)
session = sessionmaker(bind=db)()

now = datetime.date.today()
today = datetime.date(now.year, now.month, now.day)
soon = (today + datetime.timedelta(days=DUE_IN)).day

result = session.bind.execute('SELECT tenant.first_name as name, tenant.email as email, tenant.phone as phone, lease.startdate as lease_begin, lease.outdate as lease_end \
                                FROM tenant, lease, tenant_lease WHERE \
                                tenant.id=tenant_lease.tenantid AND \
                                lease.id=tenant_lease.leaseid AND \
                                lease.due={0}'.format( soon ))

for name, email, phone, lease_begin, lease_end in result.fetchall():
    if lease_begin <= today and (not lease_end or today < lease_end):
        if len(phone) > 0:
            data = {
                 'From' : ACCOUNT_PHONE,
                 'To' : phone,
                 'Body' : "Dear {0}, your rent is due in {1} days. Thank you! Rentfox - {2}".format(name, DUE_IN, settings.WEBSITE)
            }
            try:
                account.request('/%s/Accounts/%s/SMS/Messages' % \
                                          (API_VERSION, ACCOUNT_SID), 'POST', data) 
            except Exception, detail:
                logging.debug(detail)
        if len(email):
            sendEmailReminder([email])


