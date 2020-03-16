FROM mysql:5.7

LABEL sample.version="1.0"
LABEL sample.description="wordpess DB sample"

RUN apt-get update \
  && apt-get install -y --no-install-recommends tmux vim \
  && apt-get clean

RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime