const { exec } = require('child_process');

const path = process.env.PATH;

function removeNodeModulesFromPath(pathString) {
  const paths = pathString.split(':');
  const filteredPaths = paths.filter((path) => !path.includes('node_modules'));
  const newPathString = filteredPaths.join(':');
  return newPathString;
}

const options = {
    env: { ...process.env, PATH: removeNodeModulesFromPath(path)}
}

exec(`bit compile && bit lik`, options, (err, stdout, stderr) => {
  if (err) {
    console.error(err.message);
    return;
  }
  if (stderr) {
    console.error(stderr);
    return;
  }
  console.log(stdout);
});