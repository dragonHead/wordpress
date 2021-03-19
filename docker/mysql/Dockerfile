FROM mysql:5.7.33

LABEL sample.version="1.0"
LABEL sample.description="wordpress DB"

RUN apt-get update \
  && apt-get install -y --no-install-recommends locales locales-all \
  && apt-get clean

# locale
RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja

# timezon
ENV TZ Asia/Tokyo

USER mysql