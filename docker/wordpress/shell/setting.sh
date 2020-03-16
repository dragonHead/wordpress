#!/bin/bash

#wp core download --locale=ja
#wp core config --dbname=exampledb --dbuser=exampleuser --dbpass=examplepass --dbhost=wordpressdb --dbprefix=[テーブル接頭辞 default: wp_]

wp core install --url=http://localhost:8080/ --title=test --admin_user=yasu --admin_password=test01 --admin_email=test@test.com

wp core update
wp core update-db

wp plugin update --all

wp plugins update plugin_name
