#!/usr/bin/env node
const { execSync } = require('child_process');
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`☠️❌ Failed to execute ${command}`, e);
    return false;
  }
  return true;
};
const repoName = process.argv[2];
if (!repoName) {
  console.log('☠️❌ Please add name for repository');
  process.exit(-1);
}
const gitCheckoutCommand = `git clone https://github.com/liebner12/create-next-starter-repo ${repoName}`;
const installDepsCommand = `cd ${repoName}; yarn`;

console.log(`🤖 Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  console.log('☠️❌ Error occured while clonning');
  process.exit(-1);
}

console.log(`🛠️ Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) {
  console.log('☠️❌ Error occured while installing ');
  process.exit(-1);
}

console.log(
  '🎉🎉🎉 Congratulations! Follow the following command to start 🎉🎉🎉'
);
console.log(`cd ${repoName} && npm start`);
