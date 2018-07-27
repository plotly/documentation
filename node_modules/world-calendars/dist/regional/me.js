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

/* http://keith-wood.name/calendars.html
   Montenegrin localisation for Gregorian/Julian calendars for jQuery.
   By Miloš Milošević - fleka d.o.o. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['me'] = {
    name: 'Грегоријански',
    epochs: ['пне', 'не'],
    monthNames: ['Јануар','Фебруар','Март','Април','Мај','Јун',
    'Јул','Август','Септембар','Октобар','Новембар','Децембар'],
    monthNamesShort: ['Јан', 'Феб', 'Мар', 'Апр', 'Мај', 'Јун',
    'Јул', 'Авг', 'Сеп', 'Окт', 'Нов', 'Дец'],
    dayNames: ['Неђеља', 'Понеђељак', 'Уторак', 'Сриједа', 'Четвртак', 'Петак', 'Субота'],
    dayNamesShort: ['Неђ', 'Пон', 'Уто', 'Сри', 'Чет', 'Пет', 'Суб'],
    dayNamesMin: ['Не','По','Ут','Ср','Че','Пе','Су'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['me'] =
        _gregorian.prototype.regionalOptions['me'];
}
