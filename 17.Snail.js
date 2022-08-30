//Solution 1

// const snail = (array) => {
//     let finalArray = []
//     while(array.length){
//         finalArray.push(...array.shift())
//         for (let i = 0; i < array.length; i++) {
//             finalArray.push(array[i].pop())
//         }
//         finalArray.push(...(array.pop() || []).reverse())
//         for (let i = array.length - 1; i >= 0; i--) {
//             finalArray.push(array[i].shift())
//         }
//     }
//     return finalArray
// }

const snail = (array) => {
    let finalArray = []
    while(array.length) {
        finalArray.push(...array.shift())
        for (let i = 0; i < array.length; i++) {
            finalArray.push(array[i].pop())
        }
        finalArray.push(...(array.pop() || []).reverse())
        for (let i = array.length - 1; i >= 0; i--) {
            finalArray.push(array[i].shift())
        }
    }
    return finalArray
}

console.log(snail([[1,2,3], [4,5,6], [7,8,9], [10,11,12]]))

//Solution 2

// const snail = (array) => {
//     let finalArray = [];
//     while (array.length) {
//         finalArray.push(...array.shift());
//         console.log(finalArray)
//         array.map(row => finalArray.push(row.pop()))
//         console.log(array)
//         array.reverse().map(row => row.reverse());
//         console.log(array)
//     }
//     return finalArray
// }
//
// console.log(snail([[1,2,3], [4,5,6], [7,8,9], [10,11,12]]))