const path = require('node:path');
const fsPromises = require('node:fs/promises');

(async () => {
  const filePath = path.join(__dirname, 'unsplash-icon.svg');

  const fileStats = await fsPromises.stat(filePath);

  console.log(`File: ${path.basename(filePath)}`);
  console.log(`File extension: ${path.extname(filePath)}`);
  console.log(`File size: ${fileStats.size} bytes`);
  console.log(`Is file? ${fileStats.isFile()}`);
  console.log(`Is directory? ${fileStats.isDirectory()}`);
  console.log(`Created: ${fileStats.birthtime}`);
})()