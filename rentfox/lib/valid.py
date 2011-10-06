from rentfox import model
import rentfox.model.meta as meta
import re, datetime

def email(input):
	if len(input) > 5:
		if re.match("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$", input) != None:
			return 1
	return 0

def username(input):
    if len(input) > 0:
        return 1
    return 0

def password(input):
    if len(input) > 0:
        return 1
    return 0
	
def name(input):
	if len(input) > 0:
		if re.match("^[a-zA-Z]+(([\'\,\.\-\s][a-zA-Z])?[a-zA-Z]*)*[\.]?$", input) != None:
			return 1
	return 0

def text(input):
	if len(input) > 0:
		if re.match("^([ \u00c0-\u01ffa-zA-Z'])+$", input) != None:
			return 1
	return 0

def phone(input):
	if len(input) > 0:
		if re.match("^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$", input) != None:
			return 1
	return 0

def street(input):
	if len(input) > 0:
		if re.match("^[a-zA-Z\d]+(([\'\,\.\- #][a-zA-Z\d ])?[a-zA-Z\d]*[\.]*)*$", input) != None:
			return 1
	return 0

def unit(input):
	if len(input) > 0:
		if re.match("^[a-zA-Z0-9]+$", input) != None:
			return 1
	return 0

def city(input):
	if len(input) > 0:
		if re.match("^[a-zA-Z\d]+(([\'\,\.\- #][a-zA-Z\d ])?[a-zA-Z\d]*[\.]*)*$", input) != None:
			return 1
	return 0

def state(input):
	if len(input) > 0:
		if re.match("^(?i)(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[ANU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$", input) != None:
			return 1
	return 0

def zip(input):
	if len(input) > 0:
		if re.match("^\d{5}(-\d{4})?$", input) != None:
			return 1
	return 0

def date(date1, date2=None):
	if date2 != None:
		if (date(date2)) and (date(date1)):
			begin = date1.split("/")
			end = date2.split("/")
			begin = datetime.date(int(begin[2]), int(begin[0]), int(begin[1]))
			end = datetime.date(int(end[2]), int(end[0]), int(end[1]))
			if end > begin:
				return 1
			return 0
		return 0
	if len(date1) > 0:
		if re.match("^[0,1]?\d{1}\/(([0-2]?\d{1})|([3][0,1]{1}))\/(([1]{1}[9]{1}[9]{1}\d{1})|([1-9]{1}\d{3}))$", date1) != None:
			return 1
	return 0

def money(input):
	if len(input) > 0:
		if re.match("^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$", input) != None:
			return 1
	return 0

def rent(input):
    if float(input) < 100000.0:
        return 1
    return 0

def deposit(input):
    if float(input) < 100000.0:
        return 1
    return 0

def latecharge(input):
    if not input or float(input) < 100000.0:
        return 1
    return 0

def ssn(input):
	if len(input) > 0:
		if re.match("^\d{3}-\d{2}-\d{4}$", input) != None:
			return 1
	return 0

def label(input):
	if len(input) > 0:
		if re.match("^([\sa-zA-Z0-9&#'-\.])+$", input) != None:
			return 1
	return 0

def description(input):
	if len(input) > 0:
		if re.match("^([\sa-zA-Z0-9&%#?'-\.])+$", input) != None:
			return 1
	return 0

def floorplan_numbers(input):
	if len(input) > 0:
		if re.match('[0-9]+(\.[0-9]*)?$', input) != None:
			return 1
	return 0


def sqft(input):
    if len(input) > 0:
        if float(input) > 50 and float(input) < 10000:
            return 1
    return 0

def beds(input):
    if len(input) > 0:
        if float(input) < 10 and float(input) % 1 == 0.0:
            return 1
    return 0

def baths(input):
    if len(input) > 0:
        if float(input) < 10 and float(input) % .5 == 0.0:
            return 1
    return 0

def search(input):
	if len(input) > 0:
		if re.match("^[a-zA-Z0-9]+$", input) != None:
			return 1
	return 0