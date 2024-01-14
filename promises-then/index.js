// copy contents of two other files into newly created file and delete source files after copying
const path = require('node:path');
const fsPromises = require('node:fs/promises');

(async () => {
  const srcPath1 = path.join(__dirname, 'file1.txt');
  const srcPath2 = path.join(__dirname, 'file2.txt');
  const dstPath = path.join(__dirname, 'fileCopy.txt');

  Promise.all([
    fsPromises.readFile(srcPath1),
    fsPromises.readFile(srcPath2),
  ])
    .then(([srcData1, srcData2]) => {
      return new Promise((res, rej) => {
        fsPromises.appendFile(dstPath, srcData1).then(() => res(srcData2)).catch(rej);
      });
    })
    .then((srcData2) => fsPromises.appendFile(dstPath, srcData2))
    .then(() => Promise.all([
      fsPromises.rm(srcPath1),
      fsPromises.rm(srcPath2),
    ]))
    .catch((err) => console.error(err));
})();