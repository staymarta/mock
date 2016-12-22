# StayMarta: Mock Data Server

This is a super lightweight boilerplate for expressjs apps.

It's targetted towards dishing out raw data.

## Creating New Versions

Create a new folder in `/versions`, i.e `2`.

Now place new endpoints in `/versions` and your done!

## Adding new Endpoints

Copy `/templates/endpoint.js` into `/versions/<API-VERSION>/name-of-endpoint.js`.

Then add your code that a `new express.Router()` would accept, and it will be automatically
mounted onto the mock data server.
