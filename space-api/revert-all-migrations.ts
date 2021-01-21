const exec = require('child_process').exec;
const fs = require('fs');
const dir = './migrations';

const env = process.argv[2] || 'development'
fs.readdir(dir, async (err, files) =>  {
  for (let i = 0; i < files.length; i++) {
    exec(`env=${env} npm run migration:revert`, (error, stdout, stderr) => {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
           console.log('exec error: ' + error);
      }
    });
  }
});
