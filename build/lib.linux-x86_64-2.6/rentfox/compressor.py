import os, os.path, shutil

YUI_COMPRESSOR = 'yuicompressor-2.4.2.jar'

def compress(in_files, out_file, in_type='js', verbose=False,
             temp_file='.temp'):
    temp = open(temp_file, 'w')
    for f in in_files:
        fh = open(f)
        data = fh.read() + '\n'
        fh.close()

        temp.write(data)

        print ' + %s' % f
    temp.close()

    options = ['-o "%s"' % out_file,
               '--type %s' % in_type]

    if verbose:
        options.append('-v')

    os.system('java -jar "%s" %s "%s"' % (YUI_COMPRESSOR,
                                          ' '.join(options),
                                          temp_file))

    org_size = os.path.getsize(temp_file)
    new_size = os.path.getsize(out_file)

    print '=> %s' % out_file
    print 'Original: %.2f kB' % (org_size / 1024.0)
    print 'Compressed: %.2f kB' % (new_size / 1024.0)
    print 'Reduction: %.1f%%' % (float(org_size - new_size) / org_size * 100)
    print ''

SCRIPTS = [
    'public/js/jquery.js',
    'public/js/jquery.ui.js',
    'public/js/jquery.filedrop.js',
    'public/js/utils.js',
    'public/js/json.js',
    'public/js/page.js',
    'public/js/errors.js',
    'public/js/buttons.js',
    'public/js/thumbnail.js',
    'public/js/picviewer.js',
    'public/js/pulse.js',
    'public/js/set_input_text.js',
    'public/js/disable_text_select.js',
    'public/js/textarea.js',
    'public/js/foxmenu.js',
    'public/js/foxhelper.js',
    'public/js/homepage.js',
    'public/js/signin.js',
    'public/js/activate.js',
    'public/js/dashboard.js',
    'public/js/property_setup.js',
    'public/js/property_view.js',
    'public/js/property_record.js',
    'public/js/property_units.js',
    'public/js/reports_transactions.js',
    'public/js/property.js',
    'public/js/unit.js',
    'public/js/users.js',
    'public/js/contacts.js',
    'public/js/account_manage.js',
    'public/js/company_manage.js',
    'public/js/unit_view.js',
    'public/js/tenant_add.js',
    'public/js/tenant_view.js',
    'public/js/unitscroller.js',
    'public/js/history.js',
    'public/js/ajaxupload.js',
    'public/js/datepicker.js',
    'public/js/highcharts.js',
    'public/js/excanvas.compiled.js'
    ]
SCRIPTS_OUT_DEBUG = 'public/js/rentfox.js'
SCRIPTS_OUT = 'public/js/rentfox.min.js'

STYLESHEETS = [
    'public/styles/css/dashboard.css',
    'public/styles/css/homepage.css',
    'public/styles/css/signin.css',
    'public/styles/css/activate.css',
    'public/styles/css/users.css',
    'public/styles/css/property_setup.css',
    'public/styles/css/property_view.css',
    'public/styles/css/property_record.css',
    'public/styles/css/property_units.css',
    'public/styles/css/reports_transactions.css',
    'public/styles/css/unit_view.css',
    'public/styles/css/contacts.css',
    'public/styles/css/account_manage.css',
    'public/styles/css/company_manage.css',
    'public/styles/css/tenant_add.css',
    'public/styles/css/tenant_view.css',
    'public/styles/css/base.css',
    'public/styles/css/jquery_ui.css',
    'public/styles/css/datepicker.css'
    ]
STYLESHEETS_OUT = 'public/styles/css/rentfox.css'

def main():
    print 'Compressing JavaScript...'
    compress(SCRIPTS, SCRIPTS_OUT, 'js', False, SCRIPTS_OUT_DEBUG)

    print 'Compressing CSS...'
    compress(STYLESHEETS, STYLESHEETS_OUT, 'css')

if __name__ == '__main__':
    main()