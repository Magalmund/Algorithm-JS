//---------------Binary-Search(Recursion variant)---------------
//
// const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]
// let count = 0;
//
// function recursiveBinarySearch (array, item, start, end) {
// 	let middle = Math.floor((start + end) / 2);
// 	count++
// 	if (item === array[middle]) {
// 		return middle
// 	}
// 	if (item < array[middle]) {
// 		return recursiveBinarySearch(array, item, start, middle - 1)
// 	} else if(item > array[middle]) {
// 		return recursiveBinarySearch(array, item, middle + 1, end)
// 	} else {
//         return false
//     }
// }
//
// console.log(recursiveBinarySearch(array, 12, 0, array.length));



//---------------Binary-Search(Recursion variant)-end---------------