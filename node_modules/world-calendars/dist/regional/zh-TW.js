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
   Traditional Chinese localisation for Gregorian/Julian calendars for jQuery.
   Written by Ressol (ressol@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['zh-TW'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['一月','二月','三月','四月','五月','六月',
    '七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['一','二','三','四','五','六',
    '七','八','九','十','十一','十二'],
    dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
    dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
    dayNamesMin: ['日','一','二','三','四','五','六'],
    digits: main.substituteChineseDigits(
        ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'], ['', '十', '百', '千']),
    dateFormat: 'yyyy/mm/dd',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['zh-TW'] =
        _gregorian.prototype.regionalOptions['zh-TW'];
}
