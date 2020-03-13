FROM mysql:5.7

RUN apt-get update \
  && apt-get install -y --no-install-recommends vim tmux \
  && apt-get clean

RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime