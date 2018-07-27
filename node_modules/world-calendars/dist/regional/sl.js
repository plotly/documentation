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
   Slovenian localisation for Gregorian/Julian calendars for jQuery.
   Written by Jaka Jancar (jaka@kubje.org). */
/* c = &#x10D;, s = &#x161; z = &#x17E; C = &#x10C; S = &#x160; Z = &#x17D; */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['sl'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januar','Februar','Marec','April','Maj','Junij',
    'Julij','Avgust','September','Oktober','November','December'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
    'Jul','Avg','Sep','Okt','Nov','Dec'],
    dayNames: ['Nedelja','Ponedeljek','Torek','Sreda','&#x10C;etrtek','Petek','Sobota'],
    dayNamesShort: ['Ned','Pon','Tor','Sre','&#x10C;et','Pet','Sob'],
    dayNamesMin: ['Ne','Po','To','Sr','&#x10C;e','Pe','So'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['sl'] =
        _gregorian.prototype.regionalOptions['sl'];
}
