const path = require('path');

module.exports = {

    mode: 'development',
    entry: './firebase/setup.js',
    output: {
        path: path.resolve(__dirname, 'firebase'),
        filename: './firebase/finalDB.js'
    },
    watch: true

}