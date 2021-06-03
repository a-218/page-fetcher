//request 
const fs = require('fs')
const request = require('request');

const links = process.argv.slice(2)[0];
const path = process.argv.slice(2)[1];
console.log(links, '   ', path);

//const path = './index.html'
//const content = 'Somj!'

//  fs.writeFile(path , content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

//   ///links
request(links, (error, response, body) => {

  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Downloaded and saved 3261 bytes to ./index.html')
    //file written successfully
  })
  // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});

