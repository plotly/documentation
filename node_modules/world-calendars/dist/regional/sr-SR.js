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
   Serbian localisation for Gregorian/Julian calendars for jQuery.
   Written by Dejan Dimić. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['sr-SR'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januar','Februar','Mart','April','Maj','Jun',
    'Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Avg','Sep','Okt','Nov','Dec'],
    dayNames: ['Nedelja','Ponedeljak','Utorak','Sreda','Četvrtak','Petak','Subota'],
    dayNamesShort: ['Ned','Pon','Uto','Sre','Čet','Pet','Sub'],
    dayNamesMin: ['Ne','Po','Ut','Sr','Če','Pe','Su'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['sr-SR'] =
        _gregorian.prototype.regionalOptions['sr-SR'];
}
