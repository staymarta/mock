#!/usr/bin/env sh

# Expect to be in /service
#pushd "../" > /dev/null

CDIR="/SERVICE/server"

echo "I: changing directory to ${CDIR}"
cd ${CDIR}

echo "I: starting pm2"
pm2 start --no-daemon --name "service" index.js

#popd > /dev/null
