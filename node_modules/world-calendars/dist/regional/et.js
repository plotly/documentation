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
   Estonian localisation for Gregorian/Julian calendars for jQuery.
   Written by Mart Sõmermaa (mrts.pydev at gmail com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['et'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Jaanuar','Veebruar','Märts','Aprill','Mai','Juuni', 
        'Juuli','August','September','Oktoober','November','Detsember'],
    monthNamesShort: ['Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juuni',
        'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
    dayNames: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'],
    dayNamesShort: ['Pühap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
    dayNamesMin: ['P','E','T','K','N','R','L'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['et'] =
        _gregorian.prototype.regionalOptions['et'];
}
