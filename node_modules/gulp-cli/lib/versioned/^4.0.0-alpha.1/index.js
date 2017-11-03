'use strict';

var fs = require('fs');

var log = require('gulplog');
var chalk = require('chalk');
var stdout = require('mute-stdout');
var tildify = require('tildify');

var exit = require('../../shared/exit');
var isString = require('../../shared/is-string');

var logTasks = require('../../shared/log/tasks');
var logEvents = require('../^4.0.0/log/events');
var logSyncTask = require('../^4.0.0/log/syncTask');
var logTasksSimple = require('../^4.0.0/log/tasksSimple');
var registerExports = require('../../shared/registerExports');

var copyTree = require('../../shared/log/copy-tree');

function execute(opts, env, config) {

  var tasks = opts._;
  var toRun = tasks.length ? tasks : ['default'];

  if (opts.tasksSimple || opts.tasks || opts.tasksJson) {
    // Mute stdout if we are listing tasks
    stdout.mute();
  }

  var gulpInst = require(env.modulePath);
  logEvents(gulpInst);
  logSyncTask(gulpInst);

  // This is what actually loads up the gulpfile
  var exported = require(env.configPath);

  registerExports(gulpInst, exported);

  // Always unmute stdout after gulpfile is required
  stdout.unmute();

  process.nextTick(function() {
    var tree;

    if (opts.tasksSimple) {
      return logTasksSimple(gulpInst.tree());
    }
    if (opts.tasks) {
      tree = {};
      if (config.description && isString(config.description)) {
        tree.label = config.description;
      } else {
        tree.label = 'Tasks for ' + chalk.magenta(tildify(env.configPath));
      }
      tree.nodes = gulpInst.tree({ deep: true });
      return logTasks(tree, opts, function(taskname) {
        return gulpInst.task(taskname);
      });
    }
    if (opts.tasksJson) {
      tree = {};
      if (config.description && isString(config.description)) {
        tree.label = config.description;
      } else {
        tree.label = 'Tasks for ' + tildify(env.configPath);
      }
      tree.nodes = gulpInst.tree({ deep: true });

      var output = JSON.stringify(copyTree(tree, opts));
      if (typeof opts.tasksJson === 'boolean' && opts.tasksJson) {
        return console.log(output);
      }
      return fs.writeFileSync(opts.tasksJson, output, 'utf-8');
    }
    try {
      log.info('Using gulpfile', chalk.magenta(tildify(env.configPath)));
      gulpInst.parallel(toRun)(function(err) {
        if (err) {
          exit(1);
        }
      });
    } catch (err) {
      log.error(chalk.red(err.message));
      log.error('To list available tasks, try running: gulp --tasks');
      exit(1);
    }
  });
}

module.exports = execute;
