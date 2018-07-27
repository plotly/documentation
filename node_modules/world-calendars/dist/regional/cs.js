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
   Czech localisation for Gregorian/Julian calendars for jQuery.
   Written by Tomas Muller (tomas@tomas-muller.net). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['cs'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['leden','únor','březen','duben','květen','červen',
    'červenec','srpen','září','říjen','listopad','prosinec'],
    monthNamesShort: ['led','úno','bře','dub','kvě','čer',
    'čvc','srp','zář','říj','lis','pro'],
    dayNames: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
    dayNamesShort: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
    dayNamesMin: ['ne','po','út','st','čt','pá','so'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['cs'] =
        _gregorian.prototype.regionalOptions['cs'];
}
