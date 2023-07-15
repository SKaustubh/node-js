const path=require('path');

console.log(path.dirname('D:/node_js/path_modules/index.js'));
console.log(path.extname('D:/node_js/path_modules/index.js'));
console.log(path.basename('D:/node_js/path_modules/index.js'));

// console.log(path.parse('D:/node_js/path_modules/index.js'));
// // {
// //     root: 'D:/',
// //     dir: 'D:/node_js/path_modules',
// //     base: 'index.js',
// //     ext: '.js',
// //     name: 'index'
// //   }

const mypath = path.parse('D:/node_js/path_modules/index.js');
console.log(mypath.name);