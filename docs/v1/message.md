# /message endpoint

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)

Send messages to a user, and get messages.

## GET /

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)

Get a message by id.

Filtering:

* `?id=message-id`
* `/:message-id`

Example Response:

```js
{
  "id": "1392109843029",
  "sent-by": {                // /user information

  },
  "received-by": {            // /user information

  },
  "info": {
    "has_listing": true,      // is this message about a listing
    "listing": "<id>",        // appears if has_listing is true, about listing id
    "subject": "sample message subject",
    "created": "2016-12-27T03:59:36+00:00"
  },
  "message": {
    "text": "hello, world!",
    "html": "<b>hello, world!</b>"
  }
}
```

## POST /

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)

Create a messages

Example Post:

```js
{
  "to": "<user-id>",         // to user id
  "message": "hello, world", // markdown represented text.
  /* optional */
  "listing": "<listing-id>"  // listing it's about
}
```

Example Response:

```js
{
  "id": "1392109843029",
  "sent-by": {                // /user information

  },
  "received-by": {            // /user information

  },
  "info": {
    "has_listing": true,      // is this message about a listing
    "listing": "<id>",        // appears if has_listing is true, about listing id
    "subject": "sample message subject",
    "created": "2016-12-27T03:59:36+00:00"
  },
  "message": {
    "text": "hello, world!",
    "html": "<b>hello, world!</b>"
  }
}
```

## PUT /

Edit a message

Filters:

* `/:message-id`

Example Post:

```js
{
  "message": "hello, world", // markdown represented text. Make sure to encode correctly.
  /* optional */
  "listing": "<listing-id>"  // change listing it concerns.
}
```
