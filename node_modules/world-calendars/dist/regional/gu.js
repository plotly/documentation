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
   Gujarati (ગુજરાતી) localisation for Gregorian/Julian calendars for jQuery.
   Naymesh Mistry (naymesh@yahoo.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['gu'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['જાન્યુઆરી','ફેબ્રુઆરી','માર્ચ','એપ્રિલ','મે','જૂન',
    'જુલાઈ','ઑગસ્ટ','સપ્ટેમ્બર','ઑક્ટોબર','નવેમ્બર','ડિસેમ્બર'],
    monthNamesShort: ['જાન્યુ','ફેબ્રુ','માર્ચ','એપ્રિલ','મે','જૂન',
    'જુલાઈ','ઑગસ્ટ','સપ્ટે','ઑક્ટો','નવે','ડિસે'],
    dayNames: ['રવિવાર','સોમવાર','મંગળવાર','બુધવાર','ગુરુવાર','શુક્રવાર','શનિવાર'],
    dayNamesShort: ['રવિ','સોમ','મંગળ','બુધ','ગુરુ','શુક્ર','શનિ'],
    dayNamesMin: ['ર','સો','મં','બુ','ગુ','શુ','શ'],
    digits: main.substituteDigits(['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯']),
    dateFormat: 'dd-M-yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['gu'] =
        _gregorian.prototype.regionalOptions['gu'];
}
