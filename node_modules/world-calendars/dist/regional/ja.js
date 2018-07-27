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
   Japanese localisation for Gregorian/Julian calendars for jQuery.
   Written by Kentaro SATO (kentaro@ranvis.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ja'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    dayNamesShort: ['日','月','火','水','木','金','土'],
    dayNamesMin: ['日','月','火','水','木','金','土'],
    digits: main.substituteChineseDigits(
        ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'], ['', '十', '百', '千']),
    dateFormat: 'yyyy/mm/dd',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['ja'] =
        _gregorian.prototype.regionalOptions['ja'];
}
