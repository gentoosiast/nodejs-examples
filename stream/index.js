const fsPromises = require('node:fs/promises');
const path = require('node:path');
const { pipeline } = require('node:stream/promises');

(async () => {
  let sourceFh = null;
  let dstFh = null;

  try {
    const sourcePath = path.join(__dirname, 'bigfile.zip');
    const dstPath = path.join(__dirname, 'fileCopy.zip');

    sourceFh = await fsPromises.open(sourcePath, 'r');
    dstFh = await fsPromises.open(dstPath, 'w');

    const readStream = sourceFh.createReadStream();
    const writeStream = dstFh.createWriteStream();

    // await new Promise((res, rej) => {
    //   readStream.pipe(writeStream).on('finish', res).on('error', rej);
    // });

    await pipeline(readStream, writeStream);
  } catch (err) {
    console.log(`Something went wrong! ${err}`);
  } finally {
    await Promise.all([sourceFh?.close(), dstFh?.close()]);
  }
})();