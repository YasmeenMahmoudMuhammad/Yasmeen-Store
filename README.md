# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 
## Componnents
I have 5 components in my project :
1) Navebar : this fixed in all pages and have anchores to product list page and cart page.
2) Products-list : this have all products and eachone have image, name, price , quantity and add button to cart page.
3) product-details : this have more details about each product and can also add it to cart page.
4) Cart : this have all products that user adding and form collect information about this user and submit button to check out page.
5) Check-out : this have Confirmed the order to user. 

## Models
I have 1 model named Product that have interface for elements of products.

## Services
I have 1 service named Products that have project's data.

## Modules
1) app-routing-module : there're paths of project's components. 
2) app.module : have all external API of angular matrial , declerations and imports.
 
## Instuctions to run project
The project requires only npm install and ng serve to install and launch the application.