// import fs from 'fs'

// //to read data from a file

// // fs.readFile('data.txt', 'utf-8', (err, data) => {
// //     if(err) console.log(err);

// //     console.log(JSON.parse(data))
// // })

// //to create a file and add data
// //each time it overwrites content

// // const users = [
// //     {id:1, email:'aaaaaa@aa.aa'},
// //     {id:2, email:'bbbbbb@bb.bb'}
// // ];

// // fs.writeFile('output.txt', JSON.stringify(users), (err) => {
// //     if(err) console.log(err);

// //     console.log('File saved')
// // })

// fs.copyFile('output.txt', 'user.txt', (err) => {
//     if(err) console.log(err);
// })