//---------------FIZZ-BUZZ---------------


// function fizzBuzz (n) {
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 5 === 0 && i % 3 === 0) {
// 			console.log("FizzBuzz", i);
// 		} else if (i % 5 === 0) {
// 			console.log('Fizz');
// 		} else if (i % 3 === 0) {
// 			console.log('Buzz');
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }
//
// console.log(fizzBuzz(50));


function fizzBuzz (n) {
	for (let i = 1; i < n; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz")
		} else if (i % 5 === 0){
			console.log("Buzz")
		} else if (i % 3 === 0) {
			console.log("Fizz")
		} else {
			console.log(i)
		}
	}
}

console.log(fizzBuzz(50))

//---------------FIZZ-BUZZ-END---------------