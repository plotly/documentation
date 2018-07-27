/*
 * World Calendars
 * https://github.com/alexcjohnson/world-calendars
 *
 * Batch-converted from kbwood/calendars
 * Many thanks to Keith Wood and all of the contributors to the original project!
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

﻿/* http://keith-wood.name/calendars.html
   Romanian localisation for Gregorian/Julian calendars for jQuery.
   Written by Edmond L. (ll_edmond@walla.com) and Ionut G. Stan (ionut.g.stan@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ro'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
    'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
    monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
    'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec'],
    dayNames: ['Duminică', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
    dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    dayNamesMin: ['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['ro'] =
        _gregorian.prototype.regionalOptions['ro'];
}
