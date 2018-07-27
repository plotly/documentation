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
   Swedish localisation for Gregorian/Julian calendars for jQuery.
   Written by Anders Ekdahl (anders@nomadiz.se). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['sv'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
    'Juli','Augusti','September','Oktober','November','December'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
    'Jul','Aug','Sep','Okt','Nov','Dec'],
    dayNames: ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'],
    dayNamesShort: ['Sön','Mån','Tis','Ons','Tor','Fre','Lör'],
    dayNamesMin: ['Sö','Må','Ti','On','To','Fr','Lö'],
    digits: null,
    dateFormat: 'yyyy-mm-dd',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['sv'] =
        _gregorian.prototype.regionalOptions['sv'];
}
