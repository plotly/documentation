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
   Iniciacion en galego para a extensión 'UI date picker' para jQuery.
   Traducido por Manuel (McNuel@gmx.net). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['gl'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xuño',
    'Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'],
    monthNamesShort: ['Xan','Feb','Mar','Abr','Mai','Xuñ',
    'Xul','Ago','Set','Out','Nov','Dec'],
    dayNames: ['Domingo','Luns','Martes','Mércores','Xoves','Venres','Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mér','Xov','Ven','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Me','Xo','Ve','Sá'],
    digits: null,
    dateFormat: 'dd/mm/yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['gl'] =
        _gregorian.prototype.regionalOptions['gl'];
}
