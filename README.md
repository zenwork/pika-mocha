# ES6 Module Web Component Seed Project

I have built this in an attempt to keep things modern, simple, powerful, and agnostic.

## Quick Start

* On Mac OS X or on Linux run the following in a directory where you want to create a project.
```
wget -q -O /tmp/init.sh https://raw.githubusercontent.com/zenwork/pika-mocha/master/init.sh && sh /tmp/init.sh
``` 
* Then cd to the directory
* run `npm run serve`
* open <http://localhost:8888/assets> 

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
# or 
yarn
```

### Live-Coding

Pika does not support a watch mode compatible with live-coding at the moment. So we have to jump through a few hoops.
* serve content from `.serve` directory
* run `pika build` which rebuilds everything into the `pkg` dir
* rsync `pkg` to `.serve` so that only changed files are updated. This will then trigger `es-dev-server` to reload the page.

Serve: 
```
npm run serve
# or
yarn serve
``` 

watch and re-build on code change:
```
npm run build:watch
# or
yarn build:watch
```

### Headless testing

At the moment this setup only allows headless testing with bundled code.

```
npm run test:headless
# or
yarn test:headless
```

## Todo
* improve headless testing to run in a single watching process
* compatible with IE 11 and Edge (pre-chromium integration)
* sort out imports so using `.js` is not neccessary 
* maps not working in mocha test failures
