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
   Faroese localisation for Gregorian/Julian calendars for jQuery.
   Written by Sverri Mohr Olsen, sverrimo@gmail.com */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['fo'] = {
    name: 'Gregorianskur',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januar','Februar','Mars','Apríl','Mei','Juni',
    'Juli','August','September','Oktober','November','Desember'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
    'Jul','Aug','Sep','Okt','Nov','Des'],
    dayNames: ['Sunnudagur','Mánadagur','Týsdagur','Mikudagur','Hósdagur','Fríggjadagur','Leyardagur'],
    dayNamesShort: ['Sun','Mán','Týs','Mik','Hós','Frí','Ley'],
    dayNamesMin: ['Su','Má','Tý','Mi','Hó','Fr','Le'],
    digits: null,
    dateFormat: 'dd-mm-yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['fo'] =
        _gregorian.prototype.regionalOptions['fo'];
}
