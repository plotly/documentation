var linspace = require('linspace');

var t = linspace(-1,1.2,2000);
var x = (Math.pow(t, 3)) + (0.3 * (Math.random() * 2000));
var y = (Math.pow(t, 6)) + (0.3 * (Math.random() * 2000));