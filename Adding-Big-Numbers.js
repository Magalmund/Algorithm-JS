// The input numbers are big.
// The input is a string of only digits
// The numbers are positives


function add (a, b) {
    let res = '', c = 0
    a = a.split('')
    console.log(a)
    b = b.split('')
    while (a.length || b.length || c) {
        // console.log(~~a.pop())
        c += ~~a.pop() + ~~b.pop()
        console.log(c)
        console.log(c % 10)
        res = c % 10 + res
        console.log(res)
        c = c > 9
    }
    return res
}

console.log(add("128", "567"))