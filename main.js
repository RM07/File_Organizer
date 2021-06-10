#!/usr/bin/env node
// let fs = require('fs');
// let path = require('path');
let inputs = process.argv.slice(2);
let helpObject = require('./commands/help');
let organizeObject = require('./commands/organize');
let treeObject = require('./commands/tree');
// console.log(inputs);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputs[0];
switch (command) {
    case "tree":
        // treeImplementation(inputs[1]);
        treeObject.treeKey(inputs[1]);
        break;
    case "organize":
        // organizeImplementation(inputs[1]);
        organizeObject.organizeKey(inputs[1]);
        break;
    case "help":
        // helpImplementation();
        helpObject.helpKey();
        break;
    default:
        console.log("Please 🙏 input right command");
}


