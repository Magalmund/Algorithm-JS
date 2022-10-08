let strs = ["flower","flow","flight"]

// function longestPrefix(str) {
//
//     let prefix = '';
//     if(!str.length){
//         return prefix
//     }
//     for (let i = 0; i < str[0].length; i++) {
//         let char = str[0][i]
//         for (let j = 1; j < str.length; j++) {
//             if(str[j][i] !== char) return prefix
//         }
//         prefix += char
//     }
// }
//
// console.log(longestPrefix(strs))

const longestCommonPrefix = (strs) => {

    if(!strs.length){
        return ''
    }

    let count = 0;
    let matches = 0;

    while(true){
        if(strs[0].length < count + 1){
            return strs[0].substring(0, matches);
        }
        let first = strs[0].substring(0, count + 1)

        for (let i = 1; i < strs.length; i++) {
            let next = strs[i].substring(0, count + 1)
            if(first !== next){
                return strs[0].substring(0, matches)
            }
        }
        count++
        matches++
    }
};

console.log(longestCommonPrefix(strs))