# Lecture Node.js

## `nvm` for version management; LTS

- [nvm-windows](https://github.com/coreybutler/nvm-windows)

```sh
nvm install lts
nvm use lts
```

- [nvm](https://github.com/nvm-sh/nvm)

```sh
nvm install --lts
nvm use --lts
```

## CommonJS vs ESM

```js
const path = require('node:path');

module.exports = ...

// ESM
import path from 'node:path';
```

- absence of `__dirname`

<https://blog.logrocket.com/alternatives-dirname-node-js-es-modules/>

- async IIFE instead of top-level `await`

<https://github.com/nodejs/node/issues/21267>

## misc

- 'node:` imports

<https://stateful.com/blog/node-18-prefix-only-modules>

### Interoperability

- `os.EOL` <https://nodejs.org/docs/latest/api/os.html#oseol>
- `path.sep` <https://nodejs.org/docs/latest/api/path.html#pathsep>

## paths

- `path module`, path separators

<https://nodejs.org/docs/latest/api/path.html#pathjoinpaths>
<https://nodejs.org/docs/latest/api/path.html#pathresolvepaths>
<https://nodejs.org/docs/latest/api/path.html#pathextnamepath>

## file handles (aka file descriptors)

<https://nodejs.org/docs/latest/api/fs.html#class-filehandle>

## Streams

- do not mix `.pipe` and events

## race conditions

## banned sync API; status: experimental

<https://nodejs.org/docs/latest/api/fs.html#synchronous-api>
<https://nodejs.org/docs/latest/api/fs.html#fspromisescpsrc-dest-options>
<https://nodejs.org/docs/latest/api/readline.html#promises-api>

## parallel async operations; sequential async operations

- `Promise.any()`
- list of `await`s / nested callbacks

## HOWTO

### Opening file

<https://nodejs.org/docs/latest/api/fs.html#fspromisesopenpath-flags-mode>

### Reading directory contents

<https://nodejs.org/docs/latest/api/fs.html#fspromisesreaddirpath-options>
<https://nodejs.org/docs/latest/api/fs.html#class-fsdirent>

### Getting info about the file

<https://nodejs.org/docs/latest/api/fs.html#fspromisesstatpath-options>
<https://nodejs.org/docs/latest/api/fs.html#class-fsstats>

### Checking if file is readable/writable

<https://nodejs.org/docs/latest/api/fs.html#fspromisesaccesspath-mode>

### Reading file

<https://nodejs.org/docs/latest/api/fs.html#filehandlereadfileoptions>

### Creating new file / Appending to file

<https://nodejs.org/docs/latest/api/fs.html#fspromisesappendfilepath-data-options>
<https://nodejs.org/docs/latest/api/fs.html#fspromiseswritefilefile-data-options>

### Copying file

<https://nodejs.org/docs/latest/api/fs.html#fspromisesaccesspath-mode>

### Creating directory

<https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdirpath-options>

### Deleting files or directories

<https://nodejs.org/docs/latest/api/fs.html#fspromisesrmpath-options>

## callback version; callback hell

<http://callbackhell.ru/>
<https://cdn.hashnode.com/res/hashnode/image/upload/v1604259991826/zs4DeWDTh.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp>

## promise.then version

- `fs/promises` import

## async / await; try-catch

## tasks

1. Reading a File with Console Output (ReadStream)
2. Writing Console Input to File (Readline)
3. Displaying Information about Files Stored in a Folder (fs/promises readdir)
4. Copying a Directory (recursion)
5. Building the CSS Bundle (styles/*.css -> bundle.css)
6. Building an HTML Page from Components and Styles (copying assets; replacing templates in index.html; styles/*.css -> style.css)

## Links

<https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats>
