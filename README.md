Nrwl
ANgular Console
=====================================================================================
Create package.json using following command with default settings
npm init -y

TO install the Runtime dependencies
npm install --save <PACKAGE-NAME>

To install the dev./test time depedmnencies
npm install --save-dev <PACKAGE-NAME>
======================================================================================
Angular Decorators

- These are the objects used to define behavior for
  - Class
  - Property
  - Method
- Following Decorators
  - @NgModule
    - Applied on class to define the class as Angular Module aka Contianer
    - Properties of NgModule
      - imports: Of the type array, this is used to load standard and external Angular module in the current Application
      - declarations: Of the type array, this is used to declare references of all components, directives and pipes for the current application in the container provided by NgModule
      - providers: Of the type array, this is used to initialize the Dependency container to register all Angular Services so that they can be injected in Components/Directives/Pipes etc
      - bootstrap: Of the type array, this is used to define components to be bootstrap means rendered by the BrowserModule when the app is loaded.
  - @Component
    - Applied on class to make it as Angular Component
  - @Injectable
    - Applied on class to make it as Angular Service
  - @Directive
    - Applied on class to make it as Angular Directive
  - @Pipe
    - Applied on class to make it as Angular Pipe
  - @Input
    - Applied on Class property to accept data from the container
  - @Output
    - Applied on 'EventListener' to emit an event from child class to parent
  - @HostListener
    - Applied on method to host an event on the method, so that when an event is raised the method will be executed

======================================================================================
Angular 'Ivy' compilation

- Combination of Ahead-of-Time (AoT) and HTML Markup compression
- Reduce the Production out put at an average by 80%
- Ivy aka the Next-Generation View-Engine
  - Compile HTML Template into JSOM

=========================================================================
Programming With Angualar

1. Databinding
   1. Interpolation aka Expression Binding
      1. Read-Only Binding
      2. Syntax
         1. {{<PROPERTY-NAME>}}
         2. e.g. {{header}}
      3. Interpolation also evaluate Expression {{2+3}}
   2. Property Binding
      1. Binding public data member of Component with the Read/Write attribute of HTML element
         1. <input type="text" id="txt" name="t" [value]="<PROPERTY>">
         2. [value], [href], [checked], [disabled]
   3. Event Binding
      1. Binding a public method of the component with an event of HTML element
      2. <input type="button" value="Click Me" (click)="<METHOD>()">
      3. (click), (change) (keyup), (blur), ect
   4. Two-Way Binding
      1. Combination of Property Binding and EVent Binding
      2. [(ngModel)] = "<PROPERTY-FROM-COMPONENT>"
      3. ngModel is a Attribute Directive of Angular that is used for Two-Way binding
      4. To Excute ngModel, please import FormsModule from @angular/form in @NgModule imports array
      5. ngModel
         1. Has 'ngModelChanged' event, this will be fired for the default event of UI element on wheich ngMOdel is applied e.g. keyUp event for input-text element
         2. Read the updated value of the element, it will pass the value to the component for the property being updated.
         3. Component will be updated and it will update all properties dependeing on the updated property
         4. Component will pass the updated value back to HTML UI and HTML UI will be updated
2. Component Communication
3. HTTP Communication
4. Angular Elements
   1. LitElements
   2. Angular Elements
   3. Micro-Front-Ends
5. Cutomization
   1. Custom Directives
   2. Custom Decorators
   3. Custom Pipes
6. NGRX
7. Angular Testing
   1. Enzyme and Jest
8. Using Gulp
9. IOTA CSS

======================================================================
Angular Assignment 1
Create a Calculator like Windows Calculator
======================================================================

1. @angular/core
   1. NgModule, Component, Injectable, Pipe, Directice, Renderer2, ElementRef, HostListener, Input, Output, EventListener, etc.
   2. OnInit, interface for Lifecycle
2. @angular/common
   1. CommonModule
   2. @angular/common/http
      1. HttpClientModule
3. @angular/forms
   1. FormsModule, ReactiveFormsModule
   2. FormControl, FormGroup, FormBuilder, Validators, ect.
4. @angular/router
   1. RouterModule
   2. Router, Route, Routes, ActivatedRoute, CanActivate, etc.
5. @angular/platform-browser-dynamic
   1. platformBrowserDynamic()
6. @angular/platform-browser
   1. BrowserModule

=====================================================================================
Use Angular Directive for UI Management

- The reusable UI and Behavioral (custom attribute to HTML DOM Elements) objects
- 3 Types of Directives
  - Component Directive
    - Each component is directive and we can reuse it as HTML UI Element
  - Structural Directives
    - Used for dynamically ADD / REMOVE DOM based on Data expressions
      - *ngFor, *ngIf, \*ngSwitch-ngSwitchCase
  - Attribute Directives
    - The Custom Attribute for HTML DOM
      - E.g. ngModel, routerLink, formControlName, formGroup
    - Most of the Attribute directives can be used for Property-Binding

======================================================================================
Reactive Forms aka Model-Drive-Forms aka Data-Driven-Forms

<form> maped with ngForm internally
FormGroup, the at-least one form to be submitted, the collection of FormControl
FormControl is an editable element in form that is mapped with public property of the Mdoel class. The mapping is established using [formControlName] attribute directive of Angular
1. Create a FormGroup with Mapping between Model Property and FormControl
2. Apply mapping on HTML Editable Elements using [formControlName]
3. Map the <form> tag with FormGroup using [formGroup] attribute directive
4. Must hjave Submit button and the <form> tag must using (ngSubmit) event binding
5. Use Validators for validation
   1. Validators class with all Static methods
      1. required(AbstractControl), requiredTrue(AbstractControl)
         1. The Model property using this validators will auto-read the data from the FormControl and pass it this method
      2. mainlength(int)/maxlength(int)/min(int)/max(int)
      3. pattern(regEx|string)
      4. email(AbstractControl)
      5. nullValidator
      6. compose(validators array as inpute parameter)
         1. Used to apply / define validators on the Model properties
   2. Validation Evaluation on HTML Template
      1. <formGroup>.controls.<formControlName>.dirty, means its is changed
      2. <formGroup>.controls.<formControlName>.invalid or !<formGroup>.controls.<formControlName>.valid , means the value is invalid
      3. <formGroup>.controls.<formControlName>.errors.<Validation-Type>
         1. Validation-Tye
            1. required/requiredTrue
            2. pattern
            3. min/max
            4. minlength/maxlength
      4. Custom Validator
         1. Written in class as a static method
         2. The method can accept either AbstractControl or premptive type
         3. The method must return 'any' 
            1. If the value is valid then the method returns 'null'
            2. If the value is invalid then the method will return JSON object e.g.
               1. {invalid:true} / {valid:false} / {odd:true} 
                  1. <formGroup>.controls.<formControlName>.errors.<return-json-key>
                     1. return-json-key --> valid/invalid/odd
6. Import 'reactiveFormsModule' to implement Reactive Forms in imports array of NgModule

======================================================================================
Assignment Day 4:

1. Modify the Logic Class to Update and Delete the Product
2. Generate Delete button for Each Table Row for the Products table so that whern the button is clicked the Product will be deleted
3. [Mandatory] Add Radio button above the Products Table for Sort and Reverse, When these radiot buttons are clicked the Table must be sorted/ reversed based on ProductName / Price
4. Add validations for all Product properties like required/ Price cannot be -ve
5. [Mandatory] Create a Custom validator to chech Uniqueness of ProductId. This means tthat when enduse enters ProductId and Press-Tab, the valdation shoud be executed to check if the ProductId is already available in array. (Hint: Access the Logic class in Custom validator)

======================================================================================
Assignment Day 5

1. Create a Serach component, that will search categories, products from the Category and products component loaded on the page.
   1. The serach component will have a textbox, that will accept CategoryName / Productname, and the Category and Product components will show data as per the value entered in the textbox. [Mandatory]
2. Complete the Update and Delete Calls from the ProductComponents as below
   1. The Delete button for each table row will delete the record
   2. Each Table row should have an update button, and when this button is clicked that row should become editable row (use cellEdit property of TableCell) and then the Value of Update button should be replaced by 'Save'.
   3. The use will update each cell of thet row and click on Save button to update the record [Mandatory]
   4. If user press escape button then the editable row should become readonly again [Mandatory]

================================================================================================

1. Http Secure Communication for Secure REST APIs
2. Working with Custom UI in Angular aka Angular Extensibility
   1. Creating Custom Directives
      1. UI and Behavior destribution across multiple components in Current Angular App
         1. Plan for
            1. UI Requirements and its rendering
               1. ElementRef, manage the rendering
               2. Renderer2, help Elementref to manage the rendering
               3. These classes will be ctor injected in Directive and they are resolved by BrowserModule
            2. Data that will be shared between directive and its container (component)
               1. Input decorated properties
               2. Logic to manipulate proeprties
            3. Events or behavior using which the dircetive will be activated
               1. The methods those will be used to activate the Directive based on events
                  1. It is implemented using @HostListener() decorator applied on methods
                  2. HostListener() will host JavaScript Event for excuting the method to activate the Directive
   2. Angular Elements
      1. UI and Behavior destribution across third party libraries or other Angular apps
   3. LitElements
      1. Web Component Principals (?) in Angular
3. Micro Front-Ends
4. State Management
   1. NGRX
5. Misc
   1. Gulp
   2. IOTA CSS
6. Testing using the Enzume and Jest

=====================================================================================
Assignment

1. Create a Custom Directive that will check the uniqueness of the ProductId (or any other Id value) entered in Input: text element. If the value of the Id is repeated then chenage the border-color of the text element to 'red', if the value is valie then cheneg the color to yellow.

=======================================================================================================================================
Anghular Elements
npm install --save @angular/elements document-register-elements

# =

npm install --save ngx-build-plus

1. extend the Angular CLI Build behavior
   1. Single Build with all required dependencies for NG Application
   2. USe all the Angular specific Classes / objects in the Build so that the file can be shared across applicaitons e.g. Angular Elements for Micros-Front-End apps
2. ng add ngx-build-plus
   1. Install build Extension for the Current Angular CLI based apps
3. The following command to create a single file build
   1. ng build --prod --output-hashing none --single-bundle true
      1. This will product main.js with All standard Angular References along witg
         1. Components
         2. Services
         3. Directives
         4. Pipe
4. http-server
   1. Node.js based http server for Http Request processing
   2. npm install -g http-server
      1. Command to Run the Http Server
         1. http-server -p <PORT>
5. Build ngApp1 and ngApp2 as libs
6. CReate a Angular app with Communication Service and build it as Lib
7. Inject this service as 'any' in ngApp1 and ngApp2 and then load it in ngCOntainer app to have disconnedcted communication

======================================================================
"@ngrx/core": "1.2.0",

- The Package that will be used to manage the NGRX lifeCycle with Angular application with an integartion with rxjs
  "@ngrx/effects": "8.6.0",
- Provides an 'Effect' object.
- This object is a Singletone object that is defined using 'EffectModule'
- This object manages all Asyncheronous operations dispatched from Angular Actions those are dispatched from Angular Components
- This object also decides wheather the call is to make to REST API using Angular service based on action or else the dispatched action to be executed locally
  "@ngrx/router-store": "8.6.0",
- Make the NGRX store available across all components in Navigation using Routing
  "@ngrx/store": "8.6.0",
- Provides a 'StoreModule' that will be used to create a 'Singleton' store instance for the Currently loaded Angular Application
- Provides the Store Uodates based on 'Reducers'
- The Reducer object must be implemenetd as 'PURE FUNCTION' so that they will update the 'state (data)' in store with 'prev-state' with 'new-state' and return the new state
  "@ngrx/store-devtools": "8.6.0",
- Thiis package will simulate NGRX in browser using 'Browsetr's Redux Plugin'

=======================================================================
Folder Structure for Angular NGRX Project

- actions
  - actions.ts
    - Define all Action Types as exportable
  - index.ts
    - Export all Action Types as 'Single Exportable' type
- effects
  - This will have the Effect object aka middleware to manage the external calls to REST API usign angular service
  - The code for reading data from local store using 'selectors'
- store
  - Define the initial schema to store
- reducers
  - index.ts with the reducer object
- selectors
  - Define all selectors to read data from Store

=====================================================================================
Angular Single Page Application (SPA)

1. @angular/router
   1. RounterModule
      1. Route Table, using 'Routes' class
      2. Each route expression in Routing table is an instance of 'Route' class
      3. Route class has JSON object with following properties
         1. path, the Route uri expression
            1. string
               1. '', default
               2. '/<URI>' OR '<URI>'
               3. '/<URI>/:<PARAMETERS>' OR '<URI>/:<PARMETERS>'
         2. component, the component to be navigated
         3. redirectTo, default redirection if no path found
            1. The expression '\*\*', means any other value that does not match with URI Expression
         4. children, this is the child route table, collection of 'Route' instances
            1. childres:[{ROUTE-Expressions}]
         5. loadChindren, used for 'lazy-loading' of 'dynamically loaded' modules
            1. loadChildren:()=>import('<PATH-OF-MODULE-FILE>').then(module=>module.<NGMODULE-TO-BE-LOADED>)
            2. The JavaScript file that contains modules to be loaded on demand when the parent module wants to load children
         6. canActivate, this is for Role-Based-Security from sever to client, aka guarded routes
            1. canActivate:[<GUARD-SERVICE>]
         7. data, this contains the data for guarded routes
            1. data:{<READ-ROLES-FOR-GUARDS>}
         8. e.g.
            1. {path:'<URI>', component:<COMPONENT-NAME>,children:[], canActivate:[],data:{}, redirectTo:'\*\*', loadChildren:}
      4. Router class
         1. Used to event-based routing, using 'navigate(['<ROUTE-URI-EXPRESSIOn>'])' method
      5. ActivatedRoute class
         1. Used for subscribing to the Route Parameter
      6. Routing Directives
         1. [routerLink], the directive for <a> tag for executing routing
         2. Component Directive
            1. <router-outlet></router-outlet>
               1. The Container where the Route Components will be loaded and rendered
      7. CanActivate interface
         1. Used by Angular Route Guard Service to decide whether to activate routes for user/role
      8. ActivateRouteSnapShot class
         1. Decides to create a route snapshot from the routing table to render based on Users/Roles.
      9. RouterModule.forRoot(<Route-Table>)
         1. Load the Routing table on the root of Currently loaded Angular Module
      10. RouterModule.forChild(<Route-Table>)
          1. Load the routing table for lazy-loaded modules at the Root of the Angular application

=====================================================================================
SPA Exercise (30 mins)

1. Create a ProductList Componeng showing the Products Data in Table. Each Row of the table will have Edit/Delete button. On clicking on these buttons, the curresponding compnents must be loaded. After Edit and Delete succseefully, the ProductListComponent must be displayed.
2. The ProductListCOmponent, must have a button to Add New Prodct to navigate to AddProductComponent.
3. For the Edit and Delete, the Record must be checked for its availability from the REST API Calls.
