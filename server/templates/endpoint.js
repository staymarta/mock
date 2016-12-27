/**
 * Sample Endpoint
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 **/

'use strict';

module.exports = (Router) => {

  Router.get('/', (req, res) => {
    return res.send('Hello, world!')
  })

  // Always return your router at the end!
  return Router;
}
