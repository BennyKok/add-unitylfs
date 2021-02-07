#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const { exec } = require("child_process");

// copy attr file
fs.copyFile(path.join(__dirname, "resources", '.gitattributes'), path.join(process.cwd(), '.gitattributes'), (err) => {
    if (err)
        throw err;
    console.log('.gitattributes was Added!');

    // setup lfs

    if (fs.existsSync(path.join(process.cwd(), '.git'))) {
        exec("git lfs install", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } else {
        console.log('Not a git repo here! Just a reminder...');
    }
})
