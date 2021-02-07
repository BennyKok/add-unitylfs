var fs = require('fs')
var path = require('path')

fs.copyFile(path.join('.', "resources", '.gitattributes'), path.join(process.cwd(), '.gitattributes'), (err) => {
    if (err)
        throw err;
    console.log('.gitattributes was Added!');
})