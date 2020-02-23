FROM wordpress:5.3.2-php7.3-apache

RUN apt-get update \
#  && apt-get install -y --no-install-recommends vim tmux \
  && apt-get upgrade -y \
  && apt-get clean
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN useradd --user-group --create-home --shell /bin/false sitedeveloper

RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
 && php wp-cli.phar --info \
 && chmod +x wp-cli.phar \
 && mv wp-cli.phar /usr/local/bin/wp \
 && wp --info

WORKDIR /var/www/html
#USER sitedeveloper

# RUN wp core download \
# && wp language core install ja --activate --allow-root \
# && wp core install --url='http://localhost:8080' --admin_user='site_developer' --admin_password='admin_pass' --admin_email='wp@example.com' --allow-root \
# && wp option update timezone_string 'Asia/Tokyo' --allow-root \
# && wp plugin delete hello.php --allow-root \
# && wp theme delete twentyseventeen --allow-root \
# && wp theme delete twentyeighteen --allow-root \
# && wp theme delete twentynineteen --allow-root
