FROM httpd:2.4.48

LABEL sample.version="1.0"
LABEL sample.description="wordpress http server"

# apt update
RUN apt-get update \
  && apt-get install -y --no-install-recommends locales locales-all openssl \
  && apt-get clean

# locale
RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja

# timzne
ENV TZ Asia/Tokyo

# ssl [chrome chrome://flags/#allow-insecure-localhost Enable]
WORKDIR /usr/local/apache2/conf
RUN mkdir ssl.crt \
    && cd ssl.crt \
    && openssl genrsa -passout pass:test -out myCA.key 2048 \
    && openssl req -x509 -new -nodes -key myCA.key -sha256 -days 1825 -out myCA.pem -subj '/C=JP/ST=Miyagi/L=Aoba-ku/O=Localhost, Inc./OU=Dev/CN=localhost' \
    && openssl genrsa -out localhost.key 2048 \
    && openssl req -new -key localhost.key -out localhost.csr -subj '/C=JP/ST=Miyagi/L=Aoba-ku/O=Localhost, Inc./OU=Dev/CN=localhost' \
    && echo "authorityKeyIdentifier=keyid,issuer" >> localhost.ext \
    && echo "basicConstraints=CA:FALSE" >> localhost.ext \
    && echo "keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment" >> localhost.ext \
    && echo "subjectAltName = @alt_names" >> localhost.ext \
    && echo "[alt_names]" >> localhost.ext \
    && echo "DNS.1 = localhost" >> localhost.ext \
    && openssl x509 -req -in localhost.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial -out localhost.crt -days 1825 -sha256 -extfile localhost.ext \
    && cp localhost.crt server.crt \
    && cp localhost.key server.key \
    && cp myCA.pem ca-bundle.crt

# create user
RUN groupadd apache \
  && useradd -g apache apache
