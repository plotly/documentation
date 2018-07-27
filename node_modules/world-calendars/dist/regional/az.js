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
   Azerbaijani localisation for Gregorian/Julian calendars for jQuery.
   Written by Jamil Najafov (necefov33@gmail.com). */
var main = require('../main');
var _gregorian = main.calendars.gregorian;
var _julian = main.calendars.julian;

_gregorian.prototype.regionalOptions['az'] = {
    name: 'Gregorian',
    epochs: ['BCE', 'CE'],
    monthNames: ['Yanvar','Fevral','Mart','Aprel','May','İyun',
    'İyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
    monthNamesShort: ['Yan','Fev','Mar','Apr','May','İyun',
    'İyul','Avq','Sen','Okt','Noy','Dek'],
    dayNames: ['Bazar','Bazar ertəsi','Çərşənbə axşamı','Çərşənbə','Cümə axşamı','Cümə','Şənbə'],
    dayNamesShort: ['B','Be','Ça','Ç','Ca','C','Ş'],
    dayNamesMin: ['B','B','Ç','С','Ç','C','Ş'],
    digits: null,
    dateFormat: 'dd.mm.yyyy',
    firstDay: 1,
    isRTL: false
};
if (_julian) {
    _julian.prototype.regionalOptions['az'] =
        _gregorian.prototype.regionalOptions['az'];
}
