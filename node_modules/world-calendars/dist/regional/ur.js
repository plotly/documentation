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
   Urdu localisation for Gregorian/Julian calendars for jQuery.
   Mansoor Munib -- mansoormunib@gmail.com <http://www.mansoor.co.nr/mansoor.html>
   Thanks to Habib Ahmed, ObaidUllah Anwar. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ur'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['جنوری','فروری','مارچ','اپریل','مئی','جون',
    'جولائی','اگست','ستمبر','اکتوبر','نومبر','دسمبر'],
    monthNamesShort: ['1','2','3','4','5','6',
    '7','8','9','10','11','12'],
    dayNames: ['اتوار','پير','منگل','بدھ','جمعرات','جمعہ','ہفتہ'],
    dayNamesShort: ['اتوار','پير','منگل','بدھ','جمعرات','جمعہ','ہفتہ'],
    dayNamesMin: ['اتوار','پير','منگل','بدھ','جمعرات','جمعہ','ہفتہ'],
    digits: main.substituteDigits(['٠', '١', '٢', '٣', '۴', '۵', '۶', '۷', '٨', '٩']),
    dateFormat: 'dd/mm/yyyy',
    firstDay: 0,
    firstDay: 1,
    isRTL: true
};
if (_julian) {
    _julian.prototype.regionalOptions['ur'] =
        _gregorian.prototype.regionalOptions['ur'];
}
