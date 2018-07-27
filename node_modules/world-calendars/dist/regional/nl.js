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
   Dutch localisation for Gregorian/Julian calendars for jQuery.
   Written by Mathias Bynens <http://mathiasbynens.be/>. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['nl'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    monthNamesShort: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun',
    'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
    dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    digits: null,
    dateFormat: 'dd-mm-yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['nl'] =
        _gregorian.prototype.regionalOptions['nl'];
}
