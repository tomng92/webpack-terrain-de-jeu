///<reference path="node_modules/rxjs/Observer.d.ts"/>

import {Observable} from "rxjs";






let numbers = [1, 5, 10];
// let source = Observable.from(numbers);


let source = Observable.create(
    observer => {
        let index = 0;
        let produceValue = () => {

            observer.next(numbers[index++]);

            if (index < numbers.length) {
                setTimeout(produceValue, 2000);
            } else {
                observer.complete();
            }
        }

        produceValue();
    }


);


document.write('ddd dgsdssssfg my ne11w  app');
console.log('app loaded');

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
