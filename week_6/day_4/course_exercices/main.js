// Node JS Module System

// 1. Core modules (built in) from node JS website (i.e fs, http, path, crypto,...)
// 2. Third Party Modules (npm/yarn) = Node Package Manager
// 3. Local Modules - create by yourself (DB connection, Utils) to not repeat again and again a code

// 3 //////////////

// have acces to the utils.js code
// all the require on the top of the file

//CommenJS - module.export - require 
//module - export - Import
//--> write export before the module you want to export 
// AND 
// write import {module} from "./thefileofthemodule";

// wotk around to use type:module but import withou putting export everywhere. Change the extension file name to .cjs

//package:
//npm init 
//npm init -y

// const a = require('./utils.js')

// a.sayHi('Sixtine')
// a.sayBye('John')
// console.log(a);

//
// Option 1
//

// const {multi,divide,plus,minus} = require('./math/math.js');

// multi(2,5)
// divide(2,5)
// plus(2,5)
// minus(2,5)

//
// Option 2
//

// import {multi,divide,plus,minus} from './math/math.js';

// multi(2,5)
// divide(2,5)
// plus(2,5)
// minus(2,5)

// 2 ////////////
// on npm website
// make sure to install something out to date
// OR ask the community
//install on right package
// OR yarn express instead of npm install

//download axios

//npm i axios
//npm i

//npm uninstall express to delete

// import axios from 'axios'

// try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log(response.data);

// } catch (error) {
//     console.log(error);
// }

// 1 /////////////
