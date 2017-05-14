module.exports = {
    context: __dirname,
    entry: '../tests/Index.js',
    output: {
        path: __dirname + '/../tests-build',
        filename: 'build.js'
    }
};