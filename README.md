# vue-nginx-test

To run the Docker image:

```
yarn docker:run
```

This will set up an Nginx image at `localhost:8080` with the following routes:

```
/
/user/profile
/dashboard
```

Any other route will load the 404 page (to show that catch all routes can work).

Notice that the assets all load regardless of path.

# Vue CLI Docs:

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
