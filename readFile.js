// Second, create a program that reads and console.log data from welcome.txt

// Import the fs module to interact with the file system
const fs = require('fs');

// Read the content of welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        // Log an error message if reading the file fails
        console.error('Error reading the file', err);
    } else {
        // Log the content of the file to the console
        console.log(data);
    }
});
