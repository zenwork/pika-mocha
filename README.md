# ES6 Module Web Component Seed Project

I have built this in an attempt to keep things modern, simple, powerful, and agnostic.

## Quick Start

* On Mac OS X or on Linux run the following in a directory where you want to create a project.
```
wget -q -O /tmp/init.sh https://raw.githubusercontent.com/zenwork/pika-mocha/master/init.sh && sh /tmp/init.sh
``` 
* Then go to the project directory
* run `npm run serve`
* run `npm run test:watch`
* open <http://localhost:8888/assets>
* start developing 

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
* **tslint** - for linting Typescript and JS
* **lit-element** - support for building standard web components. Created by the Polymer team: <https://lit-element.polymer-project.org/> (todo)
* **mocha** + **chai** - in-browser testing runner and assertions: <https://mochajs.org/> and <https://www.chaijs.com/>
* **mocha-headless-chrome** - headles browser testing
* **es-dev-server** - es6-module-ready dev server that supports live-reloading. Created by the Open WC team: <http://open-wc.org>

### Seeded Artifacts
* a simple example web componnent
* simple tests
* html pages to demo and test the various `pkg` artifacts

## Usage

Install all dependencies.

```shell script
npm install
```

To serve the content of the `.serve` directory. 
```shell script
npm run serve
``` 

Build the `pkg` directory only.

```shell script
npm run build
```

Build the `pkg` and then the `.serve` directory .

```shell script
npm run build:serve
```

Run `build:serve` on every source change.

```shell script
npm run build:watch
```

Lint the code.

```shell script
npm run lint
```

### Testing

Run Headless tests with chromium.
```shell script
npm run test:headless
```

Run headless tests in watch mode.

```shell script
npm run test:watch
```
## ES6 Module based tests

At the moment this setup only allows headless testing with chromium and on bundled code. ES6 Module based tests can be run in a regular browser.

### How Live-Coding Works
Pika does not support a watch mode compatible with live-coding at the moment. So we have to jump through a few hoops.
* serve content from `.serve` directory
* run `pika build` which rebuilds everything into the `pkg` dir
* rsync `pkg` to `.serve` so that only changed files are updated. This will then trigger `es-dev-server` to reload the page.


## Todo
* improve headless testing to run in a single watching process
* compatible with IE 11 and Edge (pre-chromium integration)
* sort out imports so using `.js` is not neccessary 
* maps not working in mocha test failures
