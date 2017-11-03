'use strict';

var copyProps = require('copy-props');
var path = require('path');

function loadConfigFiles(configFiles, configFileOrder) {
  var config = {};

  configFileOrder.forEach(loadFile);

  function loadFile(key) {
    var filePath = configFiles[key];
    if (!filePath) {
      return;
    }

    copyProps(require(filePath), config, convert);

    function convert(value, name) {
      if (name === 'flags.gulpfile') {
        return path.resolve(path.dirname(filePath), value);
      }
      return value;
    }
  }

  return config;
}

module.exports = loadConfigFiles;
