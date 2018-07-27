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
   Hebrew localisation for Hebrew calendar for jQuery v2.0.2.
   Amir Hardon (ahardon at gmail dot com). */
var main = require('../main');

main.calendars.hebrew.prototype.regionalOptions['he'] = {
    name: 'הלוח העברי',
    epochs: ['BAM', 'AM'],
    monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני',
    'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
    monthNamesShort: ['1','2','3','4','5','6',
    '7','8','9','10','11','12'],
    dayNames: ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'],
    dayNamesShort: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
    dayNamesMin: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 0,
    isRTL: true
};
