// copy contents of two other files into newly created file and delete source files after copying
const path = require('node:path');
const fs = require('node:fs');

(async () => {
  const srcPath1 = path.join(__dirname, 'file1.txt');
  const srcPath2 = path.join(__dirname, 'file2.txt');
  const dstPath = path.join(__dirname, 'fileCopy.txt');

  try {
    fs.readFile(srcPath1, (err, src1Data) => {
      if (err) throw err;
      fs.readFile(srcPath2, (err, src2Data) => {
        if (err) throw err;
          fs.appendFile(dstPath, src1Data, (err) => {
            if (err) throw err;
            fs.appendFile(dstPath, src2Data, (err) => {
              if (err) throw err;
              fs.rm(srcPath1, (err) => {
                if (err) throw err;
                fs.rm(srcPath2, (err) => {
                  if (err) throw err;
                  console.log('done');
                });
              });
            });
          });
        });
      });
  } catch (err) {
    console.error(`Something went wrong! ${err}`);
  }
})();