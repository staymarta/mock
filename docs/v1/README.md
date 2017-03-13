# StayMarta API

**v1**

Written & maintained by [Jared Allard &lt;jared@staymarta.com&gt;](mailto:jared@staymarta.com)

## Authentication

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)

OAuth 2.0

Supported Providers:

  * Facebook
  * Username and password


[An introduction to OAuth 2.0](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)


## Standard Format

![status:not-implemented](https://img.shields.io/badge/status-not--implemented-red.svg?style=flat-square)


### Basic metadata

All responses have a `metadata` field, this field returns some basic information:

```js
{
  "metadata": {
    "server_time": "1482189604",             // Server's unix timestamp.
    "container":   "2232ccedee22232rfdfefwe" // Container ID that dished the response.
  }
}
```

### Data Pagination

All data returning endpoints return in paginated format, and follow this structure

```js
{
  "metadata": {
    "pages": 2,     // returns a relative amount of pages based on per page.
    "per_page": 1,  // amount of entries on a page.
    "entries": 2    // total amount of entries returned.
  },
  "data": []        // array of data.
}
```

### Errors

This is available when an error has occurred.

```js
{
  "error": {
    "message": "Helpful User Friendly Error Message",
    "code":    "ERRCODE"
  }
}
```
