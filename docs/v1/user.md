# /user endpoint

User creation endpoint.

## GET /

Get all users.

```js
/* pagination head, see README for more information */
[
  user,
  user,
  ...
]
/* pagination end */
```

## GET /:user-id

Return a user by id.

```js
{
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
}
```

## GET /me

![authenticated:true](https://img.shields.io/badge/authenticated-true-green.svg?style=flat-square)

Return the currently logged in user.

```js
/* see GET /:user-id object, same thing. */
```
