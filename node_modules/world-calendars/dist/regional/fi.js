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
   Finnish localisation for Gregorian/Julian calendars for jQuery.
   Written by Harri Kilpiö (harrikilpio@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['fi'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kes&auml;kuu',
    'Hein&auml;kuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
    monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kes&auml;',
    'Hein&auml;','Elo','Syys','Loka','Marras','Joulu'],
    dayNamesShort: ['Su','Ma','Ti','Ke','To','Pe','Su'],
    dayNames: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
    dayNamesMin: ['Su','Ma','Ti','Ke','To','Pe','La'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['fi'] =
        _gregorian.prototype.regionalOptions['fi'];
}
