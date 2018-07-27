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
   Lithuanian localisation for Gregorian/Julian calendars for jQuery.
   Arturas Paleicikas <arturas@avalon.lt>. */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['lt'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis',
    'Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Gruodis'],
    monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
    'Lie','Rugp','Rugs','Spa','Lap','Gru'],
    dayNames: ['sekmadienis','pirmadienis','antradienis','trečiadienis','ketvirtadienis','penktadienis','šeštadienis'],
    dayNamesShort: ['sek','pir','ant','tre','ket','pen','šeš'],
    dayNamesMin: ['Se','Pr','An','Tr','Ke','Pe','Še'],
    digits: null,
    dateFormat: 'yyyy-mm-dd',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['lt'] =
        _gregorian.prototype.regionalOptions['lt'];
}
