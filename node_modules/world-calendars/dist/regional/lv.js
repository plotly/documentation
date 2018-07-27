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
   Latvian localisation for Gregorian/Julian calendars for jQuery.
   Arturas Paleicikas <arturas.paleicikas@metasite.net>. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['lv'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Janvāris','Februāris','Marts','Aprīlis','Maijs','Jūnijs',
    'Jūlijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jūn',
    'Jūl','Aug','Sep','Okt','Nov','Dec'],
    dayNames: ['svētdiena','pirmdiena','otrdiena','trešdiena','ceturtdiena','piektdiena','sestdiena'],
    dayNamesShort: ['svt','prm','otr','tre','ctr','pkt','sst'],
    dayNamesMin: ['Sv','Pr','Ot','Tr','Ct','Pk','Ss'],
    digits: null,
    dateFormat: 'dd-mm-yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['lv'] =
        _gregorian.prototype.regionalOptions['lv'];
}
