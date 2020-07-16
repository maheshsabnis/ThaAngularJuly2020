// write the jest initializers for Angular testing w/o DOM
import 'jest-preset-angular';

// define the property for CSS to be loaded in JSDOM object

Object.defineProperty(window, 'CSS', {value: null});

// define proeprty for any other external CSS (e.g. IOTA CSS, Bootstrap, SASS)
// e.g all SASS Styles are computed styles dynamically at runtime so define proeprty
// to load such styles

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      apperance: ['-webkit-appearance']
    };
  }
});

// define property for doctype to start the HTML Template parser
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

// define property for body, trensform all databinding expression if exists
// in HTML Template
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true, // use the iteration for parsing from parent-to-child
      configurable: true // read the required configuartion for all Modules from jest
    };
  }
});
