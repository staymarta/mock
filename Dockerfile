################################################################################
# Metadata
#
FROM mhart/alpine-node:7.3
EXPOSE 80
CMD ["./service/init.sh"]
WORKDIR /SERVICE

################################################################################
# Build
#

# Install the process manager
RUN npm install -g pm2 yarn

# Install the (new) modules.
COPY package.json /SERVICE
RUN cd /SERVICE; yarn

# Copy over the files (quick rebuild!)
COPY . /SERVICE
