const os = require('node:os');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bye = () => {
  console.log(`${os.EOL}bye bye!`);
}

const ask = () => {
  rl.question('tell me what\'s on your mind? >> ', (answer) => {
    console.log(answer);
    ask();
  });
}

rl.on('close', () => {
  bye();
});

ask();