


export class MyClass {
    constructor(public name: string, public age: number = 33) {};

    printMyself() {
        console.log(`MyClass: ${this.name} age is ${this.age}`);
    }
}
