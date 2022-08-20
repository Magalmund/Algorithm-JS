//---------------Call-Back-Function---------------

// const foo = function () {
// 	return 'Hello, world!'
// }

// console.log(foo());
// console.log(foo);

// const runIt = function(fn) {
// 	return fn();
// }

// console.log(runIt(foo));



//----------------------------------------



const makePizza = function (title, cb) {
	console.log(`Заказ на приготовление пиццы "${title}" получен. Начинаем готовить...`);
	cb()
}

const readBook = function () {
	console.log('Читаю книгу "Колдун и кристал"...');
}

const eatPizza = function () {
	console.log('Ура! Пицца готова, пора подкрепится.');
}

makePizza('Пепперони', eatPizza);
readBook();



//-----------------------------------------



// function createQuote(quote, callback){ 
//   let myQuote = "Like I always say, " + quote;
//   callback(myQuote);
// }

// function logQuote(quote){
//   console.log(quote);
// }

// createQuote("eat your vegetables!", logQuote);



//---------------Call-Back-Function-end---------------


