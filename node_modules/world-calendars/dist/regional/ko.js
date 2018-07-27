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
   Korean localisation for Gregorian/Julian calendars for jQuery.
   Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ko'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['1월','2월','3월','4월','5월','6월',
    '7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월',
    '7월','8월','9월','10월','11월','12월'],
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    digits: null,
    dateFormat: 'yyyy-mm-dd',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['ko'] =
        _gregorian.prototype.regionalOptions['ko'];
}
