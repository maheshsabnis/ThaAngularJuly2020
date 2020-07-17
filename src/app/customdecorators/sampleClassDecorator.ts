// create a class decorator that will define a common proeprty
// target, is the resource where the decorator applied
// target could be class , method, etc.
// to add any new custom property in the class use
// prototype, the 'prototype' is JavaScript pattern to add
// custom proeprties/methods inexisting object

// Object.defineProperty(target.prototype)
function clsAddressInfo(target){
  // adding a new property
  Object.defineProperty(target.prototype,
      'Address', {value: () => 'Prestene Fontana Bavdhan'});
}

// applying the decorator
@clsAddressInfo
class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string
  ){}
}

let eObj  = new Employee(101, 'A');
console.log(JSON.stringify(eObj));
console.log(eObj.Address());


// decorator with parameter
// config: will be used to define default values for the
// custom defocrator's custom properties
// config will be a JSON object and it will be used as
// @clsAddressCustom ({Address: 'VALUE'})
function clsAddressCustom(config){
   return (target) => {
    Object.defineProperty(target.prototype,
      'Address', {value: () => config.Address});
   };
}

@clsAddressCustom({
  Address: 'Bavdhan Pune'
})
class Employee1 {
  constructor(
    public EmpNo: number,
    public EmpName: string
  ){}
}

let eObj1  = new Employee1(101, 'A');
console.log(JSON.stringify(eObj));
console.log(eObj1.Address());
