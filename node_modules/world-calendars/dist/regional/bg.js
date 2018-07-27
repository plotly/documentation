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
   Bulgarian localisation for Gregorian/Julian calendars for jQuery.
   Written by Stoyan Kyosev (http://svest.org). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['bg'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Януари','Февруари','Март','Април','Май','Юни',
    'Юли','Август','Септември','Октомври','Ноември','Декември'],
    monthNamesShort: ['Яну','Фев','Мар','Апр','Май','Юни',
    'Юли','Авг','Сеп','Окт','Нов','Дек'],
    dayNames: ['Неделя','Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота'],
    dayNamesShort: ['Нед','Пон','Вто','Сря','Чет','Пет','Съб'],
    dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Съ'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['bg'] =
        _gregorian.prototype.regionalOptions['bg'];
}
