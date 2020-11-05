// fetcher.js

// NOTES: 

// // Use the request library -install npm request- to make the http request 
// // Use node's fs module to write the file 
// // Use the callback based approach 
// // Do not use synchronous functions

// PLAN: 

// Do the args command line thing
// Get the bytes and spit out a messge 
// Download the URL
// ^^ require download
// const https 

const request = require('request');
const fs = require('fs');
const readline = require('readline');

const args = process.argv.slice(2);
const url = args[0];
const filetoSave = args[1];

// Set up to bypass the crtl+C
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// To "load" the data
request(url, (error, response, body) => {
  // To actually use the data
  fs.writeFile(filetoSave, body, (err) => {
    if (err) {
      console.log("File cannot be created.");
      r1.close();
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filetoSave}`); // Do not use statsSync.x.size
      rl.close();
    }
  })
})

// Still need to do a lot of the edge cases

















