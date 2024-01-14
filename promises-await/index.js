// copy contents of two other files into newly created file and delete source files after copying
const path = require('node:path');
const fsPromises = require('node:fs/promises');

(async () => {
  const srcPath1 = path.join(__dirname, 'file1.txt');
  const srcPath2 = path.join(__dirname, 'file2.txt');
  const dstPath = path.join(__dirname, 'fileCopy.txt');

  try {
    const [srcData1, srcData2] = await Promise.all([
      fsPromises.readFile(srcPath1),
      fsPromises.readFile(srcPath2),
    ])

    await fsPromises.appendFile(dstPath, srcData1);
    await fsPromises.appendFile(dstPath, srcData2);

    await Promise.all([
      fsPromises.rm(srcPath1),
      fsPromises.rm(srcPath2),
    ]);
  } catch (err) {
    console.error(err);
  }
})();