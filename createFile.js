// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".

// Import the fs module to interact with the file system
const fs = require('fs');

// Define the content to be written to the file
const content = 'Hello Node';

// Write the content to welcome.txt
fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        // Log an error message if writing to the file fails
        console.error('Error writing to file', err);
    } else {
        // Log a success message if the file is created successfully
        console.log('File created successfully');
    }
});

