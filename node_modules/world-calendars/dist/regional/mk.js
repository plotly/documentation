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
   Македонски MK localisation for Gregorian/Julian calendars for jQuery.
   Hajan Selmani (hajan [at] live [dot] com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['mk'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Јануари','Февруари','Март','Април','Мај','Јуни',
    'Јули','Август','Септември','Октомври','Ноември','Декември'],
    monthNamesShort: ['Јан', 'Фев', 'Мар', 'Апр', 'Мај', 'Јун',
    'Јул', 'Авг', 'Сеп', 'Окт', 'Нов', 'Дек'],
    dayNames: ['Недела', 'Понеделник', 'Вторник', 'Среда', 'Четврток', 'Петок', 'Сабота'],
    dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сре', 'Чет', 'Пет', 'Саб'],
    dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Са'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['mk'] =
        _gregorian.prototype.regionalOptions['mk'];
}
