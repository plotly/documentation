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
   Khmer initialisation for Gregorian/Julian calendars for jQuery.
   Written by Sovichet Tep (sovichet.tep@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['km'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['ខែ​មករា','ខែ​កុម្ភៈ','ខែ​មិនា','ខែ​មេសា','ខែ​ឧសភា','ខែ​មិថុនា',
    'ខែ​កក្កដា','ខែ​សីហា','ខែ​កញ្ញា','ខែ​តុលា','ខែ​វិច្ឆិកា','ខែ​ធ្នូ'],
    monthNamesShort: ['មក', 'កុ', 'មិនា', 'មេ', 'ឧស', 'មិថុ',
    'កក្ក', 'សី', 'កញ្ញា', 'តុលា', 'វិច្ឆិ', 'ធ្នូ'],
    dayNames: ['ថ្ងៃ​អាទិត្យ', 'ថ្ងៃ​ចន្ទ', 'ថ្ងៃ​អង្គារ', 'ថ្ងៃ​ពុធ', 'ថ្ងៃ​ព្រហស្បត្តិ៍', 'ថ្ងៃ​សុក្រ', 'ថ្ងៃ​សៅរ៍'],
    dayNamesShort: ['អា', 'ចន្ទ', 'អង្គ', 'ពុធ', 'ព្រហ', 'សុ', 'សៅរ៍'],
    dayNamesMin: ['អា','ច','អ','ពុ','ព្រ','សុ','ស'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['km'] =
        _gregorian.prototype.regionalOptions['km'];
}
