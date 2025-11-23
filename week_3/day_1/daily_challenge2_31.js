// Daily challenge: Stars

// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.

// 1
let string =""

for (let i = 0; i < 6; i++) {
    string += "*"
    console.log(string)
}

//2
for (let i = 0; i < 1; i++) {
    let string1 = ""
    for (let j = 0; j < 6; j++) {
        string1 += "*"
        console.log(string1)
    }
}