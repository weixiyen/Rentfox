import re
import os
from rentfox import settings
from pylons import request
from PIL import Image

def filetype(ext):
    if re.match('jpe?g', ext, re.IGNORECASE):
        return 'JPEG'
    elif re.match('png', ext, re.IGNORECASE):
        return 'PNG'
    elif re.match('gif', ext, re.IGNORECASE):
        return 'GIF'
    else:
        return False

def create(key, name, thumb=False, maxwidth=500, maxheight=500):
    
    myfile = request.POST[key]
    
    ext = myfile.filename.split('.')[-1]
    type = filetype(ext)
    if not type:
        return False
    # create the tmp folder if it doesn't exist
    tmp = settings.TMP_PATH
    if not os.path.exists(tmp):
        os.makedirs(tmp)
    
    photoName = name + '.' + ext
    photoPath = tmp + photoName

    # save the image
    im = Image.open(myfile.file)
    big = maxwidth, maxheight
    im.thumbnail(big, Image.ANTIALIAS)
    im.save(photoPath, type)
    
    if thumb:
	    thumbName = name + '-thumb.' + ext
	    thumbPath = tmp + thumbName
	    small = 200, 200
	    im.thumbnail(small, Image.ANTIALIAS)
	    im.save(thumbPath, type)
	    return {
	            'name': photoName,
	            'path': photoPath,
	            'thumbname': thumbName,
	            'thumbpath': thumbPath
	            }
    else:
        return {
                'name': photoName,
                'path': photoPath,
                }