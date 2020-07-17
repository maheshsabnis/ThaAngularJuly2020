"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethod = void 0;
// the method decorator
function logMethod() {
    // tslint:disable-next-line: only-arrow-functions
    return function (target, // target class
    key, // method on which it is applied
    descriptor // data descriptor
    ) {
        descriptor.enumerable = true;
        console.log("Target " + JSON.stringify(target) + " Key " + key + " Descriptor " + JSON.stringify(descriptor));
        var original = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
        var d = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
        console.log("Original " + original);
        descriptor.value = function () {
            // the class name
            var targetName = target.constructor.name;
            // arguments is a standard object
            var args = JSON.stringify(arguments);
            console.log("Arguments " + args);
            console.log("Calling " + targetName + "." + key + " with " + args);
            var result = original.apply(this, arguments);
            return result;
        };
        return descriptor;
    };
}
exports.logMethod = logMethod;
// apply on method
var Planet = /** @class */ (function () {
    function Planet(name) {
        this.name = name;
    }
    Planet.prototype.greet = function (greeting, isLoud) {
        if (isLoud === void 0) { isLoud = false; }
        var phrase = greeting + " " + this.name + "!";
        console.log(isLoud ? phrase.toUpperCase() : phrase);
    };
    __decorate([
        logMethod()
    ], Planet.prototype, "greet", null);
    return Planet;
}());
var p = new Planet('Earth');
p.greet('Welcome to ', true);
