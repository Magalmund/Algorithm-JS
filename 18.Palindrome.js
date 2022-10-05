//Solution 1
// function isPalindrome(stringToCheck){
//     const stringArray = stringToCheck.toLowerCase().split('')
//     const reverseStringArray = stringArray.reverse().join('')
//     return reverseStringArray === stringToCheck.toLowerCase();
// }
// console.log(isPalindrome('Anna'))


// Solution 2
// const isPalindrome = (string) => {
//     return string.toLowerCase() === string.toLowerCase().split('').reverse().join('')
// }


//Solution 3
// function isPalindrome(string){
//     for (let i = 0; i < Math.floor(string.length / 2); i++) {
//         console.log(string.length - i - 1)
//         if(string.toLowerCase().charAt(i) !== string.toLowerCase().charAt(string.length - i - 1)) return false
//     }
//     return true
// }
//
//
// console.log(isPalindrome('Anna'))


//Number Palindrome
// let num = 121
//
// const numberPalindrome = (num) => {
//     return num.toString() === num.toString().split('').reverse().join('')
// }
//
// console.log(numberPalindrome(num))


