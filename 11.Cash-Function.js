//---------------CASH-FUNCTION---------------

// function cashFunction(fn){
// 	const cash = {};

// 	return function (n) {
// 		if(cash[n]) {
// 			// console.log('Взято из кеша: ', cash[n]);
// 			return cash[n]
// 		}
// 		let result = fn(n)
// 		// console.log('Посчитала функция: ', result);
// 		cash[n] = result
// 		return result;
// 	}
// }


// function factorial (n){
// 	let result = 1;
// 	while(n != 1){
// 		result *= n
// 		n-= 1
// 	}
// 	return result
// }

function cashFunction(fn) {
    let cash = {}

    return function(n) {
        if(cash[n]){
            console.log('Cash: ', cash[n])
            return cash[n]
        } else {
            let result = fn(n)
            cash[n] = result
            return result

        }
    }
}

function factorial (n) {
    let result = 1
    while(n != 1) {
        result *= n
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial)

console.log(cashFactorial(5))
console.log(cashFactorial(5))
console.log(cashFactorial(5))

// console.log(factorial(5));

// const cashFactorial = cashFunction(factorial)

// console.log(cashFactorial(5));
// console.log(cashFactorial(4));
// console.log(cashFactorial(4));


//FIBONACCI
// const fibonacci = (function () {
//     let cache = {};
//
//     return function(n) {
//
//         // Base case
//         if(n==0 || n == 1)
//             return n;
//
//         // Recurse only if necessary
//         if(cache[n-2] === undefined)
//             cache[n-2] = fibonacci(n-2);
//         if(cache[n-1] === undefined)
//             cache[n-1] = fibonacci(n-1);
//
//         return cache[n-1] + cache[n-2];
//     };
// })(); //Immediately invoke to create a closure for the cache variable
//
// console.log(fibonacci(5))

//---------------CASH-FUNCTION-END---------------