FROM php:7.4.16-fpm-buster

LABEL sample.version="1.0"
LABEL sample.description="app"

# apt update
RUN set -ex apk --no-cache add libpq-dev postgresql-dev
RUN apt-get update && apt-get install -y --no-install-recommends \
    locales locales-all \
    libssl-dev libpq-dev libzip-dev zlib1g-dev libfreetype6-dev libjpeg62-turbo-dev libonig-dev libpng-dev \
    zip unzip openssh-client mariadb-client \
    && apt-get clean

# php ext install
RUN pecl install xdebug \
    && docker-php-ext-install -j$(nproc) zip pdo pdo_mysql mysqli gd \
    && docker-php-ext-enable xdebug

# locale
RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja

# timezon
ENV TZ Asia/Tokyo

#mailhog
RUN curl --location --output /usr/local/bin/mhsendmail https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64 \
    && chmod +x /usr/local/bin/mhsendmail \
    && echo 'sendmail_path="/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025 --from=no-reply@docker.dev"' > /usr/local/etc/php/conf.d/mailhog.ini

# create user
RUN useradd --user-group --create-home --shell /bin/bash dev001
ENV HOME=/home/dev001
RUN usermod -G www-data dev001
RUN mkdir $HOME/public_html

# copy src
WORKDIR $HOME/public_html/wordpress
COPY --chown=dev001:dev001 ./src ./
RUN chown -R dev001:dev001 $HOME/*

USER dev001
WORKDIR $HOME

# nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

# composer
RUN mkdir bin
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php --install-dir=bin --filename=composer
RUN php -r "unlink('composer-setup.php');"

ENV COMPOSER_HOME $HOME/.composer
ENV PATH $PATH:$HOME/bin:$COMPOSER_HOME/vender/bin:

# composer install
WORKDIR $HOME/public_html/wordpress

#WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
RUN chmod +x wp-cli.phar
RUN mv wp-cli.phar $HOME/bin/wp

# npm install
SHELL ["/bin/bash", "-c"]
RUN source $HOME/.nvm/nvm.sh && \
    nvm install v14.6.0
SHELL ["/bin/sh", "-c"]