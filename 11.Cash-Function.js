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

// console.log(factorial(5));

// const cashFactorial = cashFunction(factorial)

// console.log(cashFactorial(5));
// console.log(cashFactorial(4));
// console.log(cashFactorial(4));





function cashFunction(fn) {
    const cash = {};

    return function (n) {
        if(cash[n]) {
            console.log('Взято из кеша: ', cash[n])
            return cash[n]
        }
        let result = fn(n)
        console.log('Посчитала функция: ', result);
        cash[n] = result
        return result
    }
}

function fibonacci(n) {
    if (n < 2)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const cashFibonacci = cashFunction(fibonacci)

console.log(cashFibonacci(3))
console.log(cashFibonacci(3))
console.log(cashFibonacci(3))

//---------------CASH-FUNCTION-END---------------