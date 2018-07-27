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
   Icelandic localisation for Gregorian/Julian calendars for jQuery.
   Written by Haukur H. Thorsson (haukur@eskill.is). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['is'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Janúar','Febrúar','Mars','Apríl','Maí','Júní',
    'Júlí','Ágúst','September','Október','Nóvember','Desember'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maí','Jún',
    'Júl','Ágú','Sep','Okt','Nóv','Des'],
    dayNames: ['Sunnudagur','Mánudagur','Þriðjudagur','Miðvikudagur','Fimmtudagur','Föstudagur','Laugardagur'],
    dayNamesShort: ['Sun','Mán','Þri','Mið','Fim','Fös','Lau'],
    dayNamesMin: ['Su','Má','Þr','Mi','Fi','Fö','La'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['is'] =
        _gregorian.prototype.regionalOptions['is'];
}
