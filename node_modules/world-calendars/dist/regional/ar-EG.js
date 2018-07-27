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
   Arabic localisation for Gregorian/Julian calendars for jQuery.
   Mahmoud Khaled -- mahmoud.khaled@badrit.com
   NOTE: monthNames are the new months names */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ar-EG'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونية',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    dayNames:  ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesShort: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
    dayNamesMin: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 6,
    isRTL: true
};
if (_julian) {
    _julian.prototype.regionalOptions['ar-EG'] =
        _gregorian.prototype.regionalOptions['ar-EG'];
}
