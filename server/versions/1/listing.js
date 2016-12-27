/**
 * Listing Mock Implementation.
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1
 **/

'use strict';

let listing = {
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
    "state":         "Washington",
    "lat":           47.606209,
    "long":          -122.332071,
    "map_url":       "https://map.whatever.com/url"
  },
  "cost": {
    "currency":        "USD",
    "price":           125,
    "price_native":    105,              // native price according to ?currency
    "currency_native": "GBP",            // native currency according to ?currency
    "format":          "£",
    "price_formatted": "£105",
    "deposits":        false             // or array of user made deposits.
  },
  "host": {                              // user who offered this
    "id":            "12121",
    "name":          "John Doe",
    "picture_url":   "https://image.com",
    "thumbnail_url": "https://image.com/thumbnail",
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
        "picture":    "http://large-picture.com",// this is the defacto default.
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
};

module.exports = (Router, paginate) => {

  Router.get('/:id', (req, res) => {
    if(req.params.id === listing.id) return res.send(listing);

    return res.send({
      "error": {
        "message": "Listing ID Not Found",
        "code":    "LISTNOTFOUND"
      }
    })
  });

  Router.get('/', (req, res) => {
    return res.paginate([
      listing,
      listing
    ])
  })

  return Router;
};
