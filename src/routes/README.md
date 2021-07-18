# Routes
This folder contains the app routes.
As we are using a specific router to auto-generate OpenAPI docs, routes need to be created using classes.
You can look at example ones to get a general idea of what they should look like.


## How to add a new route
In order to create a new route all you need to do is create a new file in this folder. This new class is going to be picked up by the app, parsed and added as a route.

To learn how to configure the decorators correctly, please read the docs for [`koa-swagger-decorator`](https://github.com/Cody2333/koa-swagger-decorator#readme)



