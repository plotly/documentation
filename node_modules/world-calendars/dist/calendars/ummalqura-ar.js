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
   Arabic localisation for UmmAlQura calendar for jQuery v2.0.2.
   Written by Amro Osama March 2013. */
var main = require('../main');

main.calendars.ummalqura.prototype.regionalOptions['ar'] = {
    name: 'UmmAlQura', // The calendar name
    epochs: ['BAM', 'AM'],
    monthNames: ['المحرّم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الاول', 'جمادى الآخر', 'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
    monthNamesShort: ['المحرّم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الاول', 'جمادى الآخر', 'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
    dayNames: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesMin: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayNamesShort: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    digits: main.substituteDigits(['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']),
    dateFormat: 'yyyy/mm/dd', // See format options on BaseCalendar.formatDate
    firstDay: 6, // The first day of the week, Sat = 0, Sun = 1, ...
    isRTL: true // True if right-to-left language, false if left-to-right
};
