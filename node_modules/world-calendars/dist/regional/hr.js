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
   Croatian localisation for Gregorian/Julian calendars for jQuery.
   Written by Vjekoslav Nesek. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['hr'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj',
    'Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],
    monthNamesShort: ['Sij','Velj','Ožu','Tra','Svi','Lip',
    'Srp','Kol','Ruj','Lis','Stu','Pro'],
    dayNames: ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'],
    dayNamesShort: ['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],
    dayNamesMin: ['Ne','Po','Ut','Sr','Če','Pe','Su'],
    digits: null,
    dateFormat: 'dd.mm.yyyy.',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['hr'] =
        _gregorian.prototype.regionalOptions['hr'];
}
