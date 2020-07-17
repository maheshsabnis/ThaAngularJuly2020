// the method decorator
export function logMethod() {
  // tslint:disable-next-line: only-arrow-functions
  return function(target: Object, // target class
                  key: string, // method on which it is applied
                  descriptor: PropertyDescriptor // data descriptor
 ) {
   descriptor.enumerable = true;
   console.log(`Target ${JSON.stringify(target)} Key ${key} Descriptor ${JSON.stringify(descriptor)}`);
   const original = descriptor?.value;
   let d = descriptor?.value;
   console.log(`Original ${original}`);
   descriptor.value = function() {
     // the class name
     const targetName = target.constructor.name;
     // arguments is a standard object
     const args =  JSON.stringify(arguments);
     console.log(`Arguments ${args}`);
     console.log(`Calling ${targetName}.${key} with ${args}`);
     const result  = original.apply(this, arguments);
     return result;
   };
   return descriptor;
   };
 }
 // apply on method
class Planet {
   constructor(public name: string){}

   @logMethod()
   greet(greeting: string, isLoud: boolean = false): void {
       const phrase = `${greeting} ${this.name}!`;
       console.log(isLoud ? phrase.toUpperCase() : phrase);
   }
 }

let p = new Planet('Earth');
p.greet('Welcome to ', true);
