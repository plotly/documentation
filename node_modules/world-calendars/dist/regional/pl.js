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
   Polish localisation for Gregorian/Julian calendars for jQuery.
   Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['pl'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec',
    'Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
    'Lip','Sie','Wrz','Pa','Lis','Gru'],
    dayNames: ['Niedziela','Poniedzialek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
    dayNamesShort: ['Nie','Pn','Wt','Śr','Czw','Pt','So'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    digits: null,
    dateFormat: 'yyyy-mm-dd',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['pl'] =
        _gregorian.prototype.regionalOptions['pl'];
}
