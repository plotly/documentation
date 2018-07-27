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
   Catalan localisation for Gregorian/Julian calendars for jQuery.
   Writers: (joan.leon@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['ca'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Gener','Febrer','Mar&ccedil;','Abril','Maig','Juny',
    'Juliol','Agost','Setembre','Octubre','Novembre','Desembre'],
    monthNamesShort: ['Gen','Feb','Mar','Abr','Mai','Jun',
    'Jul','Ago','Set','Oct','Nov','Des'],
    dayNames: ['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte'],
    dayNamesShort: ['Dug','Dln','Dmt','Dmc','Djs','Dvn','Dsb'],
    dayNamesMin: ['Dg','Dl','Dt','Dc','Dj','Dv','Ds'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['ca'] =
        _gregorian.prototype.regionalOptions['ca'];
}
