FROM wordpress:5.3.2-php7.3-apache

LABEL sample.version="1.0"
LABEL sample.description="wordpess sample"

RUN apt-get update \
  && apt-get clean

RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# mailhog
RUN curl --location --output /usr/local/bin/mhsendmail https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64 \
 && chmod +x /usr/local/bin/mhsendmail \
 && echo 'sendmail_path="/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025 --from=no-reply@docker.dev"' > /usr/local/etc/php/conf.d/mailhog.ini

#composer
ENV COMPOSER_ALLOW_SUPERUSER 1
COPY --from=composer:1.9 /usr/bin/composer /usr/bin/composer

ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

#nodejs
COPY --from=node:13.10 /usr/local/bin/node /usr/local/bin/node
COPY --from=node:13.10 /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/bin/node /usr/bin/node \
  && ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/bin/npm \
  &&  ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/bin/npx

#WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
  && php wp-cli.phar --info \
  && chmod +x wp-cli.phar \
  && mv wp-cli.phar /usr/local/bin/wp \
  && wp --info

WORKDIR /var/www/html
