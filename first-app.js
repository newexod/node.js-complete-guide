console.log('Hello'); // node first-app.js in terminal

const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello from Node.js'); // create file hello.txt and 'Hello from Node.js' written there