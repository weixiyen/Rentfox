import memcache
from rentfox import settings

class Memcache(object):
    def __init__(self):
        self.Client = memcache.Client(settings.MEMCACHE_CLIENT, debug=0)
    
    def get(self, key):
        return self.Client.get(key)
        
    def set(self, key, val, time=0):
        self.Client.set(key, val, time=time)

    def delete(self, key):
        self.Client.delete(key)

    def delete_multi(self, keys, prefix=''):
        self.Client.delete_multi(keys, key_prefix=prefix)