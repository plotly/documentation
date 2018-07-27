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
   Ukrainian localisation for Gregorian/Julian calendars for jQuery.
   Written by Maxim Drogobitskiy (maxdao@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['uk'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
    'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
    monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер',
    'Лип','Сер','Вер','Жов','Лис','Гру'],
    dayNames: ['неділя','понеділок','вівторок','середа','четвер','п\'ятниця','субота'],
    dayNamesShort: ['нед','пнд','вів','срд','чтв','птн','сбт'],
    dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['uk'] =
        _gregorian.prototype.regionalOptions['uk'];
}
