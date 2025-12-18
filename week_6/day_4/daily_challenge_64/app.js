// const [greet] = require('./helpers/greeting.js');
import {greet} from "./helpers/greeting.js"

import { displayColorMessage, displayErrorMessage } from "./helpers/colorful_message.js";

import {read_file} from "./helpers/read_file.js"

console.log(greet("John"));

console.log(displayColorMessage('Happy Hannucca'));
console.log(displayErrorMessage('Something went wrong'))

//node --watch app.js (everytime that it changes it will update)


try {
    const data = await read_file("./files/data.txt")
    console.log(displayColorMessage(data))
} catch (error) {
    console.log(displayErrorMessage(error.message))
}