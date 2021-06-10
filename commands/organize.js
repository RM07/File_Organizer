let fs = require('fs');
let path = require('path');
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'txt', 'ps', 'tex', 'pptx'],
    app: ['exe', 'dmg', 'pkg', 'deb'],
    code: ['c', 'cpp', 'java']
}
function organizeImplementation(dirPath) {
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd()
        // console.log("Please enter the path");
        return;
    } else {
        const doesExists = fs.existsSync(dirPath);
        if (doesExists) {
            destPath = path.join(dirPath, 'organized_files');
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("Please enter the path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}
function organizeHelper(src, dest) {
    let filesAndFolders = fs.readdirSync(src);
    // console.log(filesAndFolders.length);
    for (let i = 0; i < filesAndFolders.length; i++) {
        let filesAndFolderAddress = path.join(src, filesAndFolders[i]);
        // console.log(filesAndFolderAddress);
        let isFile = fs.lstatSync(filesAndFolderAddress).isFile();
        if (isFile) {
            // console.log(filesAndFolderAddress);
            let category = getCategory(filesAndFolderAddress);
            // console.log(category);
            sendFile(filesAndFolderAddress, dest, category);
        }
    }
}
function sendFile(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath);
    }
    let srcFileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, srcFileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    console.log(srcFileName, ' copied to ', category);
}
function getCategory(fileName) {
    let ext = path.extname(fileName);
    ext = ext.slice(1);
    for (typ in types) {
        let currentTypeArray = types[typ];
        for (let i = 0; i < currentTypeArray.length; i++) {
            if (ext == currentTypeArray[i]) {
                return typ;
            }
        }
    }
    return "others";
}

module.exports = {
    organizeKey: organizeImplementation
}