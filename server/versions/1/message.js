/**
 * Sample Endpoint
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 **/

'use strict';

const crypto = require('crypto');

// default message.
const messages = [
  {
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
];

/**
 * Simple, hacky, input validation.
 *
 * @param {Object} props - property object.
 * @param {Object} req   - express js request object.
 * @param {Object} req   - express js response object.
 *
 * @returns {Array|undefined} returns errors array if present.
 **/
const checkProps = (props, req, res) => {
  if(typeof req.body !== 'object') return res.error('Invalid Request', 'NOTJSON');

  let errors = false;
  props.forEach(prop => {
    if(typeof prop === 'object') {
      if(!req.body[prop.prop] && prop.optional) return; // not an error.

      // Check the type.
      if(prop.type) {
        const propType = typeof req.body[prop.prop];

        if(propType !== prop.type) {
          return errors.push({
            message: `${prop.prop} got type "${propType}" expected type "${prop.type}"`,
            code: 'ERRINVREQTYPE'
          });
        }
      }

      // defaults OK.
      prop = prop.prop;
    }

    if(req.body[prop]) return;

    if(!errors) errors = [];

    errors.push({
      message: `Invalid Request, missing ${prop}`,
      code: 'ERRINVREQ'
    })
  })

  // Send the errors.
  if(errors) return res.send({
    errors: errors
  });
}


module.exports = (Router) => {

  /**
   * Get message by :id.
   **/
  Router.get('/:id', (req, res) => {
    let foundMessage = false;
    messages.every(msg => {
      if(msg.id === req.params.id) {
        foundMessage = msg;
        return false
      }

      return true;
    })

    if(foundMessage) return res.send(foundMessage);

    // error.
    return res.error('Message ID not found', 'MSGNOTFOUND');
  });

  /**
   * Delete a message by :id
   **/
  Router.delete("/:id", (req, res) => {
    let foundMessage = false;
    messages.every((msg, i) => {
      if(msg.id === req.params.id) {
        foundMessage = {
          object: msg,
          index: i
        }
        return false
      }

      return true;
    })

    console.log(foundMessage);

    // Check if we found a matching message.
    if(foundMessage) {
      messages.splice(foundMessage.index, 1);
      return res.send(foundMessage.object);
    }

    return res.error('Message ID not found.', 'MSGNOTFOUND');
  })

  /**
   * Get all currently available messages
   **/
  Router.get("/", (req, res) => {
    return res.paginate(messages)
  });

  /**
   * Update a message.
   **/
  Router.put('/:id', (req, res) => {
    let props = [
      { prop: 'message', optional: true },
      { prop: 'subject', optional: true },
      { prop: 'listing', optional: true }
    ]

    checkProps(props, req, res);

    if(res.headerSent) return console.log('sent headers, failed prop validation');

    let foundMessage = false;
    messages.every((msg, i) => {
      if(msg.id === req.params.id) {
        foundMessage = {
          object: msg,
          index: i
        }
        return false
      }

      return true;
    })

    console.log(foundMessage);

    // Check if we found a matching message.
    if(foundMessage) {
      let newmessage = foundMessage.object;
      newmessage.info.listing       = req.body.listing || null
      newmessage.info.has_listing   = false;

      // HACK: really doesn't look nice.
      if(req.body.listing) newmessage.info.has_listing = true;
      if(req.body.message) {
        newmessage.message.text = req.body.message;
        newmessage.message.html = req.body.message;
      }
      if(req.body.subject) newmessage.info.subject = req.body.subject;

      messages[foundMessage.index]  = newmessage;

      return res.send(newmessage);
    }

    return res.error('Message ID not found', 'MSGNOTFOUND')
  })

  /**
   * Send a message to :userid
   **/
  Router.post('/', (req, res) => {
    let props = [
      'to',
      'message',
      'subject',
      {
        prop: 'listing',
        optional: true
      }
    ];

    checkProps(props, req, res);

    if(res.headerSent) return console.log('sent headers, failed prop validation.')

    const newmessage = {
      id: crypto.randomBytes(20).toString('hex'),
      "sent-by": {
          todo: true
      },
      "received-by": {
        id: req.body.true,
        todo: true
      },
      info: {
        has_listing: req.body.listing || false,
        listing: req.body.listing || null,
        subject: req.body.subject,
        created: new Date().toISOString()
      },
      message: {
        text: req.body.message,
        html: req.body.message
      }
    };
    messages.push(newmessage)

    return res.send(newmessage);
  })

  // Always return your router at the end!
  return Router;
}
