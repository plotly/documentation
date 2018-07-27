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
   Slovak localisation for Gregorian/Julian calendars for jQuery.
   Written by Vojtech Rinik (vojto@hmm.sk). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['sk'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Január','Február','Marec','Apríl','Máj','Jún',
    'Júl','August','September','Október','November','December'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','Máj','Jún',
    'Júl','Aug','Sep','Okt','Nov','Dec'],
    dayNames: ['Nedel\'a','Pondelok','Utorok','Streda','Štvrtok','Piatok','Sobota'],
    dayNamesShort: ['Ned','Pon','Uto','Str','Štv','Pia','Sob'],
    dayNamesMin: ['Ne','Po','Ut','St','Št','Pia','So'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 0,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['sk'] =
        _gregorian.prototype.regionalOptions['sk'];
}
