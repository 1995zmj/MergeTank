// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//     console.log(constructor);

//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }



// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//     };
// }
// @classDecorator
// export class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//         console.log("Greeter constructor");
//     }
// }
