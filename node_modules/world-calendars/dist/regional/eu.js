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
   Basque localisation for Gregorian/Julian calendars for jQuery.
   Karrikas-ek itzulia (karrikas@karrikas.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['eu'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Urtarrila','Otsaila','Martxoa','Apirila','Maiatza','Ekaina',
    'Uztaila','Abuztua','Iraila','Urria','Azaroa','Abendua'],
    monthNamesShort: ['Urt','Ots','Mar','Api','Mai','Eka',
    'Uzt','Abu','Ira','Urr','Aza','Abe'],
    dayNames: ['Igandea','Astelehena','Asteartea','Asteazkena','Osteguna','Ostirala','Larunbata'],
    dayNamesShort: ['Iga','Ast','Ast','Ast','Ost','Ost','Lar'],
    dayNamesMin: ['Ig','As','As','As','Os','Os','La'],
    digits: null,
    dateFormat: 'yyyy/mm/dd',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['eu'] =
        _gregorian.prototype.regionalOptions['eu'];
}
