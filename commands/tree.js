let fs = require('fs');
let path = require('path');
function treeImplementation(dirPath) {
    // console.log('dir path is ',dirPath);
    // let destPath;
    if (dirPath == undefined) {
        // console.log("Please enter the path");
        treeHelper(process.cwd(), "");
        return;
    } else {
        // console.log('dir path is',dirPath);
        const doesExists = fs.existsSync(dirPath);
        console.log(doesExists);
        if (doesExists == true) {
            treeHelper(dirPath, " ");
        } else {
            console.log("Please enter the path");
            return;
        }
    }
}
function treeHelper(dirPath, indent) {
    // console.log(dirPath);
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        let fileName = path.basename(dirPath);
        console.log(indent, '-----------   ', fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent, '>>>>>>>>>>>', dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + '\t');
        }
    }
}

module.exports = {
    treeKey: treeImplementation
}