# ES6 Module Web Component Seed Project

I have built this in an attempt to keep things modern, simple, powerful, and agnostic.  

## Goal

The goal of this seed project is to build a simple tool-chain for ES6 module-based web components.

* Publish and/or serve ES6 module based JS
* Publish Typescript typings(`*.d.ts` files) to make this project a TS-compatible dependency.
* Run tests against the same transpiled code that will be published
* Be able to debug Typescript in the browser
* Works in modern browsers

## Stack
* **pika.dev cli** - A set of tools based on parcel that builds standard's compliant es6 module packages. Lightweight integration, tree-shakeable code, ready for http 2. Perfect for delivering shareable code: <https://www.pika.dev/docs/>
* **typescript** - Modern JS + support of a type-system: <https://www.typescriptlang.org/>
* **lit-element** - support for building standard web components. Created by the Polymer team: <https://lit-element.polymer-project.org/> (todo)
* **mocha** + **chai** - in-browser testing runner and assertions: <https://mochajs.org/> and <https://www.chaijs.com/>
* **es-dev-server** - es6-module-ready dev server that supports live-reloading. Created by the Open WC team: <http://open-wc.org>

## Usage

Install all dependencies

```
npm install
```

### Live-Coding

By serving the output of the `./pkg` directory we can run mocha tests, demo, and/or a full-blown application.

watch code changes: 
```
npm run build:watch
``` 

serve tests:
```
npm run test:watch
```

## Todo
* test with headless browsers
* intgrate lit-element
* compatible with IE 11 and Edge (pre-chromium integration)
