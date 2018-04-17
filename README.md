# Decoupled Starter Kit Application from Acquia

## Getting started

### Prerequisites

- [Decoupedkit React Graphql Server](https://github.com/acquia-pso/decoupledkit-react/tree/develop/__graphql_server)
- [Decoupledkit Drupal](https://github.com/acquia-pso/decoupledkit-drupal)
- [Angular CLI](https://github.com/angular/angular-cli)

```
npm install

# or

yarn install
```

The start the application with `ng`

```ng serve```


## About

The Acquia Decoupled Starter Kit for Angular provides a complete working environment for demonstrating and prototyping front-end digital experience applications coded in standard Javascript, utilizing decoupled Drupal as a content service. This starter kit aims to provide technical guidance and insights for both Javascript and Drupal developers and is comprised of three separate applications: Headless Lightning Drupal website, React application, and a GraphQL application. Each of these applications works in tandem to illustrate patterned workflows when developing with each of the interconnected applications.

The Decoupled Starter Kit for Angular was created by Steve Worley and Jason Enter from the Acquia Professional Services team. The intent of the application(s) is to explore different architectural scenarios when building Decoupled Drupal applications while using the development to explore options around best practices with these patterned workflows. The components are broken out by functional purposes and the content subjects are intended as straightforward methods to understand.

## Feature Summary

### Drupal CRUD 
This page addresses workflows when dealing directly with JSON API endpoints served from a Headless Lightning Drupal instance. These tasks are broken out by core CRUD (Create, Read, Update, Delete) tasks for rich text and images fields. This application does not propose replacing Drupal content authoring strengths but rather seeks to understand workflows around interacting with API content.

### GraphQL Client (Single) 
This page addresses architecture scenarios when interacting with a GraphQL server which is exposing content that originates from Drupal's JSON API (single source). These components interact with data that is served via GraphQL queries to retrieve and compare data sets. This page also helps to compare benefits of using GraphQL as a middle orchestration layer, opposed to dealing directly with standard JSON API structures.

### GraphQL Client (Multiple) 
This page builds upon the previous example by synthesizing non-Drupal and Drupal API data with GraphQL by combining multiple sources. GraphQL serves the combination of data points into proper structures for retrieval of data, as well as GraphQL mutations. This component also addresses scenarios around caching and performance by using the Apollo Client layer.

### API Data Failover 
Architectures which lean on external sources as the primary data streams can offer challenges. This page demonstrates methods to tackle these scenarios with API failure with techniques of browser cache, local indexed databases, and local storage.

### API Data Mock 
This component illustrates utilizing techniques to mock API data endpoints when developing locally. Mock data endpoints are typically included within local build scripts to help emulate data models, while addressing issues around rate limits, changing real data, and similar challenges.


## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
