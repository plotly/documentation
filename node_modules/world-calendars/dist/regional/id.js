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
   Indonesian localisation for Gregorian/Julian calendars for jQuery.
   Written by Deden Fathurahman (dedenf@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['id'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januari','Februari','Maret','April','Mei','Juni',
    'Juli','Agustus','September','Oktober','Nopember','Desember'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
    'Jul','Agus','Sep','Okt','Nop','Des'],
    dayNames: ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
    dayNamesShort: ['Min','Sen','Sel','Rab','kam','Jum','Sab'],
    dayNamesMin: ['Mg','Sn','Sl','Rb','Km','jm','Sb'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['id'] =
        _gregorian.prototype.regionalOptions['id'];
}
