# /message endpoint

Send messages to a user, and get messages.

## GET /

Return all messages

Example:

```js
/* pagination head */
[
  <message>,
  <message>
]
/* pagination end */
```

## GET /:message-id


Get a message by id.

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
    "html": "<b>hello, world!</b>" // processed markdown
  }
}
```

## POST /

Create a messages

Example Post:

```js
{
  "to": "<user-id>",         // to user id
  "message": "hello, world", // markdown represented text.
  "subject": "simple subject",
  /* optional */
  "listing": "<listing-id>"  // listing it's about
}
```

Example Response:

See [GET / response](https://github.com/staymarta/mock/blob/master/docs/v1/message.md#get-message-id)

## PUT /:message-id

Edit a message

Example Post:

```js
{
  "message": "hello, world",    // markdown represented text.
  "subject": "updated subject",
  /* optional */
  "listing": "<listing-id>"     // change listing it concerns.
}
```

Example Response:

See [GET / response](https://github.com/staymarta/mock/blob/master/docs/v1/message.md#get-message-id)


## DELETE /:id

Delete a message by id.

Example Response:

```js
{
  "id": "5ed86a052ed381acb4c78beae6e606600ff5bfc0",
  "sent-by": {
    "todo": true
  },
  "received-by": {
    "todo": true
  },
  "info": {
    "has_listing": false,
    "listing": null,
    "subject": "Hello, world!",
    "created": "2017-01-04T19:50:10.335Z"
  },
  "message": {
    "text": "testing... 1.. 2.. 3..",
    "html": "testing... 1.. 2.. 3.."
  }
}
```
