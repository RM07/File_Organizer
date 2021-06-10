function helpImplementation() {
    console.log(`
        List of all the commands are:
        node main.js tree "directoryPath"
        node main.js organize "directoryPath"
        node main.js help
    `)
}

module.exports = {
    helpKey: helpImplementation
}