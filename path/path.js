let path = require('path');
//console.log(path);

//console.log(__filename)

let pathObj = path.parse(__filename);
//console.log(pathObj);

//console.log(path.posix.basename(__filename));
//console.log(path.basename('/tmp/myfile.html'));

//console.log(process.env.PATH);
// Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

//console.log(path.delimiter);

//console.log(process.env.PATH.split(path.delimiter));
// Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']


//console.log(__dirname);
//console.log(path.dirname(__dirname));

//console.log(path.extname(__filename));

//console.log("dirname -> extname: ", path.extname(__dirname))
// console.log(__filename);
// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))


//console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '.'));

// console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
// console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

//console.log(path.posix);

// console.log(path.resolve('/foo/bar', '/tmp/file/'))
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
// console.log(path.resolve('/wwwroot', 'static_files/png/', '../gif/image.gif'));

// console.log(path.sep)