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
   Turkish localisation for Gregorian/Julian calendars for jQuery.
   Written by Izzet Emre Erkan (kara@karalamalar.net). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['tr'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
    'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
    monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz',
    'Tem','Ağu','Eyl','Eki','Kas','Ara'],
    dayNames: ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'],
    dayNamesShort: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
    dayNamesMin: ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['tr'] =
        _gregorian.prototype.regionalOptions['tr'];
}
