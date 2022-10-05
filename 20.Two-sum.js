// const nums = [3,4,1,6,2,9]
// const target = 6

// let twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
// }


//BETTER SOLUTION

const nums = [3,4,1,6,2,9]
const target = 4

function twoSum(nums, target) {
    let numObj = {}

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(numObj[complement] !== undefined) {
            return [numObj[complement], i]
        }
        numObj[nums[i]] = i
    }
}

console.log(twoSum(nums, target))


