// Daily challenge: Not Bad

// Instructions
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.

let sentence = "The movie is not that bad, I like it"

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not")

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad")

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(sentence);

} else {
console.log(sentence);

}

