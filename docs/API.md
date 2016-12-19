# StayMarta API

## Authentication

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)

OAuth 2.0

Supported Providers:

  * Facebook
  * Username and password


## Standard Format

### Data Pagination

All data returning endpoints return in paginated format, and follow this structure

```js
{
  "metadata": {
    "pages": 2,      // returns a relative amount of pages based on per page.
    "per_page": 1,    // amount of entires on a page.
    "listings": 2    // total amount of listings.
  },
  // data, i.e for listings, "listings"
}
```
