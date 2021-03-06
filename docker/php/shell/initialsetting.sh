#!/bin/bash

#https://wp-cli.org/ja/

#wp core download --locale=ja
#wp core config --dbname=dbtest --dbuser=dbtet01 --dbpass=dbtest01 --dbhost=phptest_db --dbprefix=[テーブル接頭辞 default: wp_]

# サイトインストール
wp core install --url=http://localhost:8080/ --title=test --admin_user=site-developer --admin_password=test01 --admin_email=test@test.com

# サイトの言語を日本語に変更
wp language core install ja --activate

# タイムゾーンを東京に変更
wp option update timezone_string 'Asia/Tokyo'

# 日付のフォーマットを「Y年n月j日」に変更
wp option update date_format 'Y年n月j日'

# 時刻フォーマットを「H:i」に変更
wp option update time_format 'H:i'

# 不要な投稿、固定ページを削除
wp post delete 1 2 3 --force

# 不要なテーマを削除
wp theme uninstall twentysixteen twentyseventeen twentynineteen

# 不要なプラグインををアンインストール
wp plugin uninstall hello
wp plugin uninstall akismet

# パーマリンク設定
wp rewrite structure '/archives/%post_id%'

# プラグインのインストール
# https://ja.wordpress.org/plugins/
wp plugin install wp-multibyte-patch --activate
wp plugin install updraftplus --activate
wp plugin install all-in-one-wp-security-and-firewall --activate
wp plugin install WPScan
wp plugin install easy-updates-manager
wp plugin install wordfence --activate
wp plugin install password-protected

# コアアップデート
wp core update
wp core update-db

# プラグインアップデート
wp plugin update --all

# テーマアップデート
wp theme update --all

# 翻訳アップデート
wp language core update
wp language plugin update --all
wp language theme update --all
