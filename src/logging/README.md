## Logging

The logger provided is an instance of `pino` logger configured to include a `requestId` property in the logs metadata.

This `requestId` is handled via CLS. Every time you log as part of a request, you will be able to link it to a specific request.
