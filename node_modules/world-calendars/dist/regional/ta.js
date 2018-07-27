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
   Tamil (UTF-8) localisation for Gregorian/Julian calendars for jQuery.
   Written by S A Sureshkumar (saskumar@live.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ta'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['தை','மாசி','பங்குனி','சித்திரை','வைகாசி','ஆனி',
    'ஆடி','ஆவணி','புரட்டாசி','ஐப்பசி','கார்த்திகை','மார்கழி'],
    monthNamesShort: ['தை','மாசி','பங்','சித்','வைகா','ஆனி',
    'ஆடி','ஆவ','புர','ஐப்','கார்','மார்'],
    dayNames: ['ஞாயிற்றுக்கிழமை','திங்கட்கிழமை','செவ்வாய்க்கிழமை','புதன்கிழமை','வியாழக்கிழமை','வெள்ளிக்கிழமை','சனிக்கிழமை'],
    dayNamesShort: ['ஞாயிறு','திங்கள்','செவ்வாய்','புதன்','வியாழன்','வெள்ளி','சனி'],
    dayNamesMin: ['ஞா','தி','செ','பு','வி','வெ','ச'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['ta'] =
        _gregorian.prototype.regionalOptions['ta'];
}
