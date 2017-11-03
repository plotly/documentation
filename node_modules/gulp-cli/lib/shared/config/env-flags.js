'use strict';

var path = require('path');
var copyProps = require('copy-props');

var toFrom = {
  configPath: 'flags.gulpfile',
  configBase: 'flags.gulpfile',
};

function mergeConfigToEnvFlags(env, config) {
  return copyProps(env, config, toFrom, convert, true);
}

function convert(value, configKey, envKey) {
  if (envKey === 'configBase') {
    return path.dirname(value);
  }
  return value;
}

module.exports = mergeConfigToEnvFlags;
