## Middleware

We provide a few default middlewares to handle error handling, logging and validation.
You can create new middlewares in this folder.

### Base middlewares

### Error handling
This is a default koa error handler to log the error and then allow koa's default handler to continue.

### Logging
A simple logging middleware to log request and response data. Can be modified to include more data as needed. Please beware not to log private information.

### Validation
A base middleware to validate either a request body or query string. It will take in a valid Joi schema, run validation, replace data with validated (and default) values and handle errors.

### RequestId
Simple middleware to save the requestId into the CLS store.

### RequestStore
Simple middleware to bind each request to its CLS scope.

