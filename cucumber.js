module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require ./stepDefinitions/*',
    '--publish-quiet',
  ].join(' '),
};
