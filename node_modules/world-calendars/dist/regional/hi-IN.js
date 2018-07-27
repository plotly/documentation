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
   Hindi INDIA localisation for Gregorian/Julian calendars for jQuery.
   Written by Pawan Kumar Singh. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['hi-IN'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['जनवरी',' फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून','जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'],
    monthNamesShort: ['जन', 'फर', 'मार्च','अप्रै', 'मई', 'जून','जुलाई', 'अग', 'सित', 'अक्टू', 'नव', 'दिस'],
    dayNames: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    dayNamesShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
    dayNamesMin: ['र','सो','मं','बु','गु','शु','श'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['hi-IN'] =
        _gregorian.prototype.regionalOptions['hi-IN'];
}
