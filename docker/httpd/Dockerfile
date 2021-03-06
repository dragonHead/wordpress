FROM httpd:2.4.46

# apt update
RUN set -ex apk --no-cache add libpq-dev postgresql-dev
RUN apt-get update && apt-get install -y --no-install-recommends \
    locales locales-all openssl \
    && apt-get clean

# locale
RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja

# timzne
ENV TZ Asia/Tokyo

# create user
RUN groupadd apache
RUN useradd -g apache apache
