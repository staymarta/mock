/**
 * Sample Endpoint
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 **/

'use strict';

let user = {
  "id": "2394083204832098",
  "full_name": "John Doe",
  "info": {
    "bio": "user bio",
    "bio_html": "<b>user bio</b>",  // formatted user bio (markdown or etc)
    "age": 18,
    "verified": true,               // placeholder for likely verification needs in the future.
    "has_listing": true,            // true if user has listings.
    "listing_ids": [                // only shown when has_listing = true
      1221412
    ],
    "location": "",                 // some geolocation format.
    "email": "johndoe@example.com"  // user's email.
  }
};

module.exports = (Router) => {
  /**
   * Return the currently logged in user.
   **/
  Router.get('/me', (req, res) => {
    return res.send(user);
  })

  /**
   * Return the user by :id.
   **/
  Router.get('/:id', (req, res) => {
    if(req.params.id === user.id) return res.send(user);

    return res.send({
      "error": {
        "message": "User ID Not Found",
        "code":    "USERNOTFOUND"
      }
    })
  })

  /**
   * Return all the users that currently exists.
   **/
  Router.get('/', (req, res) => {
    return res.paginate([
      user,
      user,
      user
    ])
  })

  // Always return your router at the end!
  return Router;
}
