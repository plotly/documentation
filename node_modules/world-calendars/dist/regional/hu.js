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
   Hungarian localisation for Gregorian/Julian calendars for jQuery.
   Written by Istvan Karaszi (jquerycalendar@spam.raszi.hu). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['hu'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június',
    'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún',
    'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Vasárnap', 'Hétfö', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
    dayNamesShort: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
    dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
    digits: null,
    dateFormat: 'yyyy-mm-dd',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['hu'] =
        _gregorian.prototype.regionalOptions['hu'];
}
