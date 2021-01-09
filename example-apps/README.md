# Examples

## Nodejs App

```bash
dokku apps:create node-js-app
dokku git:initialize node-js-app
```

```bash
cd node-js-app
git init
git remote add dokku dokku@dokku.cloud.ucar.edu:node-js-app
git push dokku master
```

```bash
dokku proxy:ports-set node-js-app http:80:9999
```
