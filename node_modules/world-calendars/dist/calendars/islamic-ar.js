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
   Arabic localisation for Islamic calendar for jQuery v2.0.2.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) August 2009. */
var main = require('../main');

main.calendars.islamic.prototype.regionalOptions['ar'] = {
    name: 'Islamic',
    epochs: ['BAM', 'AM'],
    monthNames: ['محرّم', 'صفر', 'ربيع الأول', 'ربيع الآخر أو ربيع الثاني', 'جمادى الاول', 'جمادى الآخر أو جمادى الثاني',
    'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
    monthNamesShort: ['محرّم', 'صفر', 'ربيع الأول', 'ربيع الآخر أو ربيع الثاني', 'جمادى الاول', 'جمادى الآخر أو جمادى الثاني',
    'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجة'],
    dayNames: ['يوم الأحد', 'يوم الإثنين', 'يوم الثلاثاء', 'يوم الأربعاء', 'يوم الخميس', 'يوم الجمعة', 'يوم السبت'],
    dayNamesShort: ['يوم الأحد', 'يوم الإثنين', 'يوم الثلاثاء', 'يوم الأربعاء', 'يوم الخميس', 'يوم الجمعة', 'يوم السبت'],
    dayNamesMin: ['يوم الأحد', 'يوم الإثنين', 'يوم الثلاثاء', 'يوم الأربعاء', 'يوم الخميس', 'يوم الجمعة', 'يوم السبت'],
    digits: main.substituteDigits(['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']),
    dateFormat: 'yyyy/mm/dd',
    firstDay: 6,
    isRTL: true
};
