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
   Albanian localisation for Gregorian/Julian calendars for jQuery.
   Written by Flakron Bytyqi (flakron@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['sq'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Janar','Shkurt','Mars','Prill','Maj','Qershor',
    'Korrik','Gusht','Shtator','Tetor','Nëntor','Dhjetor'],
    monthNamesShort: ['Jan','Shk','Mar','Pri','Maj','Qer',
    'Kor','Gus','Sht','Tet','Nën','Dhj'],
    dayNames: ['E Diel','E Hënë','E Martë','E Mërkurë','E Enjte','E Premte','E Shtune'],
    dayNamesShort: ['Di','Hë','Ma','Më','En','Pr','Sh'],
    dayNamesMin: ['Di','Hë','Ma','Më','En','Pr','Sh'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['sq'] =
        _gregorian.prototype.regionalOptions['sq'];
}
