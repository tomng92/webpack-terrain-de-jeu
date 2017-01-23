///<reference path="node_modules/rxjs/Observer.d.ts"/>



import {Observable} from "rxjs";
import {MyClass} from "./myclass";


let numbers = [1, 22, 14];
//let numbers = [110];
// let source = Observable.from(numbers);


let source = Observable.create(
    observer => {
        let index = 0;
        let produceValue = () => {

            observer.next(numbers[index++]);

            if (index < numbers.length) {
                setTimeout(produceValue, 2000);
            } else {
                setTimeout(obsComplete, 4444);
                //observer.complete();
            }
        };

        let obsComplete = () => observer.complete();

        produceValue();
    }
);


function printval(index: number) {
    console.log(numbers[index]);
}

function doIt(index: number) {
    if (index < numbers.length) {
        printval(index);
        setTimeout(doIt(++index), 2000);
    }
}

class MaClasse {
    constructor(public name: string) {};
    doPrint() {
        console.log("Maclass is %s" + this.name);
    }
}


document.write('ddd dgsdssssfg my ne11w  app');
console.log("doIt now.....");

doIt(0);

let myclass = new MyClass('tom');

function doOut() {
    console.log(this.toString());
    myclass
}
setTimeout(doOut, 1000);


console.log("Now the observable....");

source.subscribe(

    value => console.log(value),
    err => console.log(`err ${err}`),
    () => console.log('complted!')

);

// class MyObserver implements Observer<number> {
//     next(value)  {
//         console.log(value);
//     }
//     error (err: any)   {
//         console.log(err);
//     }
//     complete()   {
//         console.log("complted !");
//     }
// }
