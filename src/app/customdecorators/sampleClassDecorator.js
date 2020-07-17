// create a class decorator that will define a common proeprty
// target, is the resource where the decorator applied
// target could be class , method, etc.
// to add any new custom property in the class use
// prototype, the 'prototype' is JavaScript pattern to add
// custom proeprties/methods inexisting object
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Object.defineProperty(target.prototype)
function clsAddressInfo(target) {
    // adding a new property
    Object.defineProperty(target.prototype, 'Address', { value: function () { return 'Prestene Fontana Bavdhan'; } });
}
// applying the decorator
var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
    }
    Employee = __decorate([
        clsAddressInfo
    ], Employee);
    return Employee;
}());
var eObj = new Employee(101, 'A');
console.log(JSON.stringify(eObj));
console.log(eObj.Address());
// decorator with parameter
// config: will be used to define default values for the
// custom defocrator's custom properties
// config will be a JSON object and it will be used as
// @clsAddressCustom ({Address: 'VALUE'})
function clsAddressCustom(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'Address', { value: function () { return config.Address; } });
    };
}
var Employee1 = /** @class */ (function () {
    function Employee1(EmpNo, EmpName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
    }
    Employee1 = __decorate([
        clsAddressCustom({
            Address: 'Bavdhan Pune'
        })
    ], Employee1);
    return Employee1;
}());
var eObj1 = new Employee1(101, 'A');
console.log(JSON.stringify(eObj));
console.log(eObj1.Address());
