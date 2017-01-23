"use strict";
class MyClass {
    constructor(name, age = 33) {
        this.name = name;
        this.age = age;
    }
    ;
    printMyself() {
        console.log(`MyClass: ${this.name} age is ${this.age}`);
    }
}
exports.MyClass = MyClass;
//# sourceMappingURL=myclass.js.map