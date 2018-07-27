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
   Thai localisation for Gregorian/Julian calendars for jQuery.
   Written by pipo (pipo@sixhead.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['th'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
    'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
    monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.',
    'ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
    dayNames: ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'],
    dayNamesShort: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'],
    dayNamesMin: ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['th'] =
        _gregorian.prototype.regionalOptions['th'];
}
