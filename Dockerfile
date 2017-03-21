################################################################################
# Metadata
#
FROM mhart/alpine-node:base
EXPOSE 80
CMD ["./service/init.sh"]
WORKDIR /SERVICE

################################################################################
# Build
#

# Fix SSL. See https://github.com/Yelp/dumb-init/issues/73
RUN   apk update \
 &&   apk --no-cache add ca-certificates wget \
 &&   update-ca-certificates

# Update base
RUN apk upgrade --no-cache --no-self-upgrade --available

# Install dumb-init
RUN wget -O /usr/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64
RUN chmod +x /usr/bin/dumb-init

# Install yarn (will be in apk soon)
RUN apk add --no-cache curl && \
  mkdir -p /opt && \
  curl -sL https://yarnpkg.com/latest.tar.gz | tar xz -C /opt && \
  mv /opt/dist /opt/yarn && \
  ln -s /opt/yarn/bin/yarn /usr/local/bin && \
  apk del --purge curl
  
# Install the (new) modules.
COPY package.json /SERVICE
RUN cd /SERVICE; yarn

# Copy over the files (quick rebuild!)
COPY . /SERVICE
