/**
 * Sample Endpoint
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 **/

'use strict';

let message = {
  "id": "1392109843029",
  "sent-by": {                // /user information
    "todo": true
  },
  "received-by": {            // /user information
    "todo": true
  },
  "info": {
    "has_listing": true,      // is this message about a listing
    "listing": "<id>",        // appears if has_listing is true, about listing id
    "subject": "sample message subject",
    "created": "2016-12-27T03:59:36+00:00"
  },
  "message": {
    "text": "hello, world!",
    "html": "<b>hello, world!</b>" // processed markdown
  }
}

module.exports = (Router) => {

  /**
   * Get message by :id.
   **/
  Router.get('/:id', (req, res) => {
    if(message.id === req.params.id) return res.send(message);

    return res.send({
      "error": {
        "message": "Message ID Not Found",
        "code":    "MSGNOTFOUND"
      }
    })
  });

  /**
   * get all currently available messages
   **/
  Router.get("/", (req, res) => {
    return res.paginate([
      message,
      message,
      message
    ])
  });

  // Always return your router at the end!
  return Router;
}
