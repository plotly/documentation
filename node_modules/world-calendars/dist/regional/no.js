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
   Norwegian localisation for Gregorian/Julian calendars for jQuery.
   Written by Naimdjon Takhirov (naimdjon@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['no'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januar','Februar','Mars','April','Mai','Juni',
    'Juli','August','September','Oktober','November','Desember'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun',
    'Jul','Aug','Sep','Okt','Nov','Des'],
    dayNamesShort: ['Søn','Man','Tir','Ons','Tor','Fre','Lør'],
    dayNames: ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
    dayNamesMin: ['Sø','Ma','Ti','On','To','Fr','Lø'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['no'] =
        _gregorian.prototype.regionalOptions['no'];
}
