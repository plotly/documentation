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
   Romansh localisation for Gregorian/Julian calendars for jQuery.
   Yvonne Gienal (yvonne.gienal@educa.ch). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['rm'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Schaner','Favrer','Mars','Avrigl','Matg','Zercladur',
    'Fanadur','Avust','Settember','October','November','December'],
    monthNamesShort: ['Scha','Fev','Mar','Avr','Matg','Zer',
    'Fan','Avu','Sett','Oct','Nov','Dec'],
    dayNames: ['Dumengia','Glindesdi','Mardi','Mesemna','Gievgia','Venderdi','Sonda'],
    dayNamesShort: ['Dum','Gli','Mar','Mes','Gie','Ven','Som'],
    dayNamesMin: ['Du','Gl','Ma','Me','Gi','Ve','So'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['rm'] =
        _gregorian.prototype.regionalOptions['rm'];
}
