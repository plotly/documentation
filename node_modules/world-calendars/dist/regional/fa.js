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
   Farsi/Persian localisation for Gregorian/Julian calendars for jQuery.
   Javad Mowlanezhad -- jmowla@gmail.com */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['fa'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['فروردين','ارديبهشت','خرداد','تير','مرداد','شهريور',
    'مهر','آبان','آذر','دي','بهمن','اسفند'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNames: ['يکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه'],
    dayNamesShort: ['ي','د','س','چ','پ','ج', 'ش'],
    dayNamesMin: ['ي','د','س','چ','پ','ج', 'ش'],
    digits: main.substituteDigits(['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']),
    dateFormat: 'yyyy/mm/dd',
    firstDay: 6,
    isRTL: true
};
if (_julian) {
    _julian.prototype.regionalOptions['fa'] =
        _gregorian.prototype.regionalOptions['fa'];
}
