//---------------Binary-Search---------------

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0


// function binarySearch(array, item){
// 	let start = 0;
// 	let end = array.length;
// 	let middle;
// 	let found = false;
// 	let position = -1;
// 	while(found === false && start <= end) {
// 		count += 1
// 		middle = Math.floor((start + end)/2);
// 		if(array[middle] === item) {
// 			found = true
// 			position = middle
// 			return position
// 		}
// 		if(item < array[middle]){
// 			end = middle - 1
// 			console.log(end = middle - 1);
// 		} else {
// 			start = middle + 1
// 			console.log(start = middle + 1);
// 		}
// 	}
// 	return position
// }


function binarySearch (array, item) {
	let start = 0
	let end = array.length
	let middle
	let position = -1
	let found = false

	while(found === false && start <= end) {
		count++
		middle = Math.floor((start + end) / 2)

		if(array[middle] === item){
			position = middle
			found = true
			return position
		} else if(item < array[middle]){
			end = middle - 1
		} else {
			start = middle + 1
		}
	}
}


console.log(binarySearch(array, 13));
console.log(count);
//---------------Binary-Search-end---------------