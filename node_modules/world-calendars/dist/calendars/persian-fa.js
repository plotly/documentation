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
   Farsi/Persian localisation for Persian calendar for jQuery v2.0.2.
   Written by Sajjad Servatjoo (sajjad.servatjoo{at}gmail.com) April 2011. */
var main = require('../main');

main.calendars.persian.prototype.regionalOptions['fa'] = {
    name: 'Persian',
    epochs: ['BP', 'AP'],
    monthNames: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    monthNamesShort: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    dayNames: ['يک شنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه', 'شنبه'],
    dayNamesShort: ['يک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه'],
    dayNamesMin: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
    digits: main.substituteDigits(['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']),
    dateFormat: 'yyyy/mm/dd',
    firstDay: 6,
    isRTL: true
};
