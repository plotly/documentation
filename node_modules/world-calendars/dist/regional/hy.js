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
   Armenian localisation for Gregorian/Julian calendars for jQuery.
   Written by Levon Zakaryan (levon.zakaryan@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['hy'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս',
    'Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'],
    monthNamesShort: ['Հունվ','Փետր','Մարտ','Ապր','Մայիս','Հունիս',
    'Հուլ','Օգս','Սեպ','Հոկ','Նոյ','Դեկ'],
    dayNames: ['կիրակի','եկուշաբթի','երեքշաբթի','չորեքշաբթի','հինգշաբթի','ուրբաթ','շաբաթ'],
    dayNamesShort: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
    dayNamesMin: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['hy'] =
        _gregorian.prototype.regionalOptions['hy'];
}
