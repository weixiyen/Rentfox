import pycurl, urllib, StringIO, xmlite

class usps:
	def __init__(self, userid=None, password=None, firm='', address1='', address2='', city='', state='', zip5='', zip4=''):
		self.userid = "124RENTF6190"
		self.password = "957QR11AQ748"
		self.country = "United States"
		self.submit_url = "http://testing.shippingapis.com/ShippingAPITest.dll"
		self.firm = firm
		self.address1 = address1
		self.address2 = address2
		self.city = city
		self.state = state
		self.zip5 = zip5
		self.zip4 = zip4
	
	def xml(self):
		xml = '<AddressValidateRequest USERID="' + self.userid + '">'
		xml += '<Address ID="0">'
		#xml += '<FirmName>'+self.firm+'</FirmName>'
		xml += '<Address1>'+self.address1+'</Address1>'
		xml += '<Address2>'+self.address2+'</Address2>'
		xml += '<City>'+self.city+'</City>'
		xml += '<State>'+self.state+'</State>'
		xml += '<Zip5>'+self.zip5+'</Zip5>'
		xml += '<Zip4>'+self.zip4+'</Zip4>'
		xml += '</Address></AddressValidateRequest>'
		return xml
	
	def request(self):
		postvars = {"API":"Verify", "XML":self.xml()}
		b = StringIO.StringIO()
		c = pycurl.Curl()
		c.setopt(c.URL, self.submit_url)
		c.setopt(pycurl.WRITEFUNCTION, b.write)
		c.setopt(c.POSTFIELDS, urllib.urlencode(postvars))
		c.perform()
		c.close()
		return b.getvalue()
	
	def verify(self):
		xmlList = xmlite.parse(self.request())
		xmlList = xmlList[1][2]
		xmlList.pop(0)
		xmlList.pop(0)
		if xmlList[0][0] != 'Error':
			address = {}
			for i in xmlList:
				address[i[0].lower()] = i[2].title()
				if i[0] == 'State':
					address[i[0].lower()] = i[2]
			return address
		return None