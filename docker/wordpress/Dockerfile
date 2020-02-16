FROM wordpress:5.3.2-php7.3-apache

RUN apt-get update

RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
 && php wp-cli.phar --info \
 && chmod +x wp-cli.phar \
 && mv wp-cli.phar /usr/local/bin/wp \
 && wp --info

ENV COMPOSER_ALLOW_SUPERUSER 1
COPY --from=composer:1.9 /usr/bin/composer /usr/bin/composer

ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin
