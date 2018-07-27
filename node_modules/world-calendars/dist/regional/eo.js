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
   Esperanto localisation for Gregorian/Julian calendars for jQuery.
   Written by Olivier M. (olivierweb@ifrance.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['eo'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Januaro','Februaro','Marto','Aprilo','Majo','Junio',
    'Julio','Aŭgusto','Septembro','Oktobro','Novembro','Decembro'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
    'Jul','Aŭg','Sep','Okt','Nov','Dec'],
    dayNames: ['Dimanĉo','Lundo','Mardo','Merkredo','Ĵaŭdo','Vendredo','Sabato'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Ĵaŭ','Ven','Sab'],
    dayNamesMin: ['Di','Lu','Ma','Me','Ĵa','Ve','Sa'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['eo'] =
        _gregorian.prototype.regionalOptions['eo'];
}
