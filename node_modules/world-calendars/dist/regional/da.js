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
   Danish localisation for Gregorian/Julian calendars for jQuery.
   Written by Jan Christensen ( deletestuff@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['da'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januar','Februar','Marts','April','Maj','Juni',
    'Juli','August','September','Oktober','November','December'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
    'Jul','Aug','Sep','Okt','Nov','Dec'],
    dayNames: ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
    dayNamesShort: ['Søn','Man','Tir','Ons','Tor','Fre','Lør'],
    dayNamesMin: ['Sø','Ma','Ti','On','To','Fr','Lø'],
    digits: null,
    dateFormat: 'dd-mm-yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['da'] =
        _gregorian.prototype.regionalOptions['da'];
}
