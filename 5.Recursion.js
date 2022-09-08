//---------------Recursion---------------

//Factorial

const factorial = (n) => {
	if (n === 1) {
		return 1
	}
	return n * factorial(n-1)
}

console.log(factorial(5));



//Fibonachi - 1, 1, 2, 3, 5, 8, 13, 21

//Not Right(so long calculation )

const fibonachi = (n) => {
	if (n === 1 || n === 2){
		return 1
	}
	return fibonachi(n-1) + fibonachi(n-2)
}
console.log(fibonachi(40));


//Right solution

const fib = n => {
	let prev = 0, next = 1;
	for (let i = 0; i < n; i++) {
		let temp = next;
		next = prev + next;
		prev = temp;
	}
	return prev
}

console.log(fib());

//---------------Recursion-end---------------