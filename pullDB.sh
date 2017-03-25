#!/bin/bash
# Sync the remote database from bluehost
ssh hpandco@hpand.co "mysqldump -uhpandco_ss_dbc59 -pDKmRyagpUHrb  hpandco_ss_dbnamec59 | gzip" | gzip -d | mysql -uroot -ptacoma tester &&
mysql -uroot -ptacoma hp -e "UPDATE wp_kbxq_options SET option_value = replace(option_value, 'https://www.hpand.co', 'http://hp.dev') WHERE option_name = 'home' OR option_name = 'siteurl';"
