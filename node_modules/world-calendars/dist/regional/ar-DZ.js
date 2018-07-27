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
   Algerian (and Tunisian) Arabic localisation for Gregorian/Julian calendars for jQuery.
   Mohamed Cherif BOUCHELAGHEM -- cherifbouchelaghem@yahoo.fr */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ar-DZ'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان',
    'جويلية', 'أوت', 'سبتمبر','أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    dayNames: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesShort: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesMin: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 6,
    isRTL: true
};
if (_julian) {
    _julian.prototype.regionalOptions['ar-DZ'] =
        _gregorian.prototype.regionalOptions['ar-DZ'];
}
