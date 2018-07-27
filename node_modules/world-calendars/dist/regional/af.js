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
   Afrikaans localisation for Gregorian/Julian calendars for jQuery.
   Written by Renier Pretorius and Ruediger Thiede. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['af'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januarie','Februarie','Maart','April','Mei','Junie',
    'Julie','Augustus','September','Oktober','November','Desember'],
    monthNamesShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
    'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
    dayNames: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
    dayNamesShort: ['Son', 'Maan', 'Dins', 'Woens', 'Don', 'Vry', 'Sat'],
    dayNamesMin: ['So','Ma','Di','Wo','Do','Vr','Sa'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['af'] =
        _gregorian.prototype.regionalOptions['af'];
}
