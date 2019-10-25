# Mithril HTTPS
Visualization of HTTPS connection establishment.

Inspired by a presentation on DevOps conference.

## setup
### install dependencies
````
npm install mithril --save-prod
npm install node-forge --save-prod
````

### hot reload with budo
````
npm install budo -g
````

### WebPack workflow
````
npm install webpack webpack-cli webpack-dev-server --save-dev
````

### troubleshoot open ports
```
lsof -i -n -P
```