from pylons import request
from boto.s3.connection import S3Connection
from boto.s3.key import Key
import mimetypes
from rentfox import settings

def getBucket():
    conn = S3Connection(settings.AWS_ACCESS_KEY_ID, settings.AWS_SECRET_ACCESS_KEY)
    return conn.get_bucket(settings.AWS_BUCKET_NAME)

def save(key, path):
    key = 'uploads/' + key
    k = Key(getBucket(), key)
    k.set_contents_from_filename(path)
    mime = mimetypes.guess_type(key)
    k.set_metadata("Content-Type", mime)
    k.set_acl('public-read')

def remove(key):
    key = 'uploads/' + key
    k = Key(getBucket(), key)
    k.delete()