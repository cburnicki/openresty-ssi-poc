# OpenResty SSI Case Study

## What this is about
This is a case study to check if [lua-native-ssi-nginx](https://github.com/DracoBlue/lua-native-ssi-nginx) meets our requirements.
I am using [my mock service](https://github.com/cburnicki/mock-service) to emulate a service (and server behavior) behind the openResty proxy.

## How to use this thing
* Run `docker-compose up` to start the proxy and the mock service.
* Make a request to `localhost:8080/static/index.html` to request the index page.

The `www` directory contains static files (endpoint: `localhost:8080/static/*`). All updates to this directory will be immediately applied to the docker container.
The `ssi` directory contains the lua plugin files.

Check [the mock service documentation](https://github.com/cburnicki/mock-service) on how to mock different kinds of service responses.