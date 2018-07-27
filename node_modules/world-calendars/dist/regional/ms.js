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
   Malaysian localisation for Gregorian/Julian calendars for jQuery.
   Written by Mohd Nawawi Mohamad Jamili (nawawi@ronggeng.net). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ms'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januari','Februari','Mac','April','Mei','Jun',
    'Julai','Ogos','September','Oktober','November','Disember'],
    monthNamesShort: ['Jan','Feb','Mac','Apr','Mei','Jun',
    'Jul','Ogo','Sep','Okt','Nov','Dis'],
    dayNames: ['Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu'],
    dayNamesShort: ['Aha','Isn','Sel','Rab','Kha','Jum','Sab'],
    dayNamesMin: ['Ah','Is','Se','Ra','Kh','Ju','Sa'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['ms'] =
        _gregorian.prototype.regionalOptions['ms'];
}
