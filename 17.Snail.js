//Solution 1

const snail = (array) =>{
    let finalArray = []
    while(array.length){
        finalArray.push(...array.shift())
        for (let i = 0; i < array.length; i++){
            finalArray.push(array[i].pop())
        }
        finalArray.push(...(array.pop() || []).reverse())
        for (let i = array.length -1; i >= 0; i--){
            finalArray.push(array[i].shift())
        }
    }
    return finalArray
}

console.log(snail([[1,2,3], [4,5,6],[7,8,9]]))

//Solution 2

// const snail = (arr) => {
//     let finalArray = [];
//     while (arr.length) {
//         finalArray.push(...arr.shift());
//         arr.map(row => finalArray.push(row.pop()))
//         arr.reverse().map(row => row.reverse());
//     }
//     return finalArray
// }