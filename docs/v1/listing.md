# /listing endpoint

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)

This endpoint returns listings. All data returning endpoints are paginated.

## GET /

Get a paginated list of all the now available listings. Defaults to `10`.

Example response

```js
// ?per_page=50
{
  "metadata": {
    "pages": 2,      // returns a relative amount of pages based on per page.
    "per_page": 1    // amount of entries on a page.
    "listings": 2    // total amount of listings.
  },
  "listings": [
    /* listing */
  ]
}
```

## GET /:listing-id

Get a listing.

Params:

`?currency` currency to display in, i.e "USD", "GBP", defaults to USD.

Example response:

```js
// Sent with ?currency=GBP

{
  "id":   "1221412",
  "info": {
    "name": "Name of place",
    "description": "Charming city...",
    "rules": "Some house rules here...",
    "check_in": 14,
    "check_out": 12,
    "cancel_policy": "strict",
    "cancel_limit": 5,                   // cancel range limit.
    "reviews": 0
  },
  "location": {
    "country":       "United States",
    "country_code":  "US",
    "zipcode":       "98117",
    "city":          "Seattle",
    "state"          "Washington",
    "lat":           47.606209,
    "long":          -122.332071,
    "map_url"        "https://map.whatever.com/url"
  },
  "cost": {
    "currency":        "USD",
    "price":           125,
    "price_native":    105,              // native price according to ?currency
    "currency_native": "GBP"             // native currency according to ?currency
    "format":          "£",
    "price_formatted": "£105",
    "deposits":        false             // or array of user made deposits.
  },
  "host": {                              // user who offered this
    "id":            "12121",
    "name":          "John Doe",
    "picture_url":   "https://image.com",
    "thumbnail_url": "https://image.com/thumbnail"
    "about":         "Hello, world!",
    "language":      "English"
  },
  "property": {                         // property information
    "type": "Apartment",                // Apartment, House,
    "beds": 0,
    "baths": 0,
    "bedrooms": 0,
    "max_people": 3
  },
  "amenities": [                        // services offered here.
    "Wireless Internet",
    "Internet",
    "TV",
    "Heater",
    "AC"
  ],
  "pictures": {                         // pictures
    "amount": 1,
    "list": [
      {
        "id": 1030210,
        "picture":    "http://large-picture.com" // this is the defacto default.
        "large":  "http://large-picture.com",
        "medium": "http://medium-picture.com",
        "small":  "http://medium-small.com",
        "caption":    "hello world!",
        "sort_order": 1
      }
    ]
  },
  "availability": {                   // is it available? What days not. UTC.
    "available": true,
    "dates_not_available": [          // shown when certain days are booked, but always available otherwise.
      "2016-12-14"
    ],
    "dates_available":     [          // shown when limited availability
      "2016-12-14"
    ]
  }
}
```

## POST /

Create a new listing and then return it.

Example response

```js
/* listing object */
```

## PUT /

Update a listing.

Filtering:

* `?listing-id`
* `/:listing-id`
* `JSON.listing`

Example Response

```js
/* listing object updated */
```

## DELETE /

Deletes a listing and then returns the deleted listing.

Filtering:

* `?listing-id`
* `/:listing-id`

**NOTE**: While supplying data in a delete isn't technically
against the RFC, we avoid it to make sure there are no issues in case
it gets revised at some point.

Example response

```js
/* listing object */
```
