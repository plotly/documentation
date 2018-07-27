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
   Georgian localisation for Gregorian/Julian calendars for jQuery.
   Andrei Gorbushkin. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ka'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['იანვარი','თებერვალი','მარტი','აპრილი','მაისი','ივნისი',
    'ივლისი','აგვისტო','სექტემბერი','ოქტომბერი','ნოემბერი','დეკემბერი'],
    monthNamesShort: ['იან', 'თებ', 'მარ', 'აპრ', 'მაისი', 'ივნ',
    'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
    dayNames: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'],
    dayNamesShort: ['კვ', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
    dayNamesMin: ['კვ','ორ','სმ','ოთ', 'ხშ', 'პრ','შბ'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['ka'] =
        _gregorian.prototype.regionalOptions['ka'];
}
