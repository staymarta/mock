/**
 * StayMarta API Mock Data.
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1
 **/

'use strict';

const express = require('express');
const async   = require('async');
const path    = require('path');
const fs      = require('fs');
const debug   = require('./lib/logger.js')('bootstrap')

let app = express();

app.use((req, res, next) => {

  res.paginate = data => {
    return res.send({
      metadata: {
        pages: data.length,
        per_page: 1,
        length: data.length
      },
      data: data
    })
  };

  return next();
})

const ROUTE_DIR = path.join(__dirname, 'versions');
async.waterfall([
  /**
   * Get a list of all the available versions
   **/
  next => {
    fs.readdir(ROUTE_DIR, (err, files) => {
      if(err) return next(err);

      debug('found versions:', files.toString(', '))

      return next(false, files);
    })
  },

  /**
   * Load Each Version's endpoints.
   **/
  (versions, done) => {
    if(typeof versions !== 'object') return done('versions isn\'t type object.')

    // load every version.
    versions.forEach(version => {
      const VERSION_PATH = path.join(ROUTE_DIR, version);

      // read the dir for routes.
      fs.readdir(VERSION_PATH, (err, routes) => {
        if(err) return done(err);

        async.each(routes, (route, next) => {
          let route_path = path.join(VERSION_PATH, route);
          let name       = path.parse(route).name;
          let router     = new express.Router();
          let mount      = `/v${version}/${name}`;

          let func = require(route_path)(router);

          if(!func) return next(`${name} failed to return Router.`)

          debug(`mount route ${name} on ${mount}`)
          app.use(mount, func);

          return next();
        }, err => {
          return done(err);
        })
      })
    })
  }
], err => {
  if(err) throw Error(err);

  debug('app listening on *:8081')
  app.listen(8081);
});
