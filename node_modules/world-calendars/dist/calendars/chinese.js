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
   Traditional Chinese calendar for jQuery v2.0.2.
   Written by Nicolas Riesco (enquiries@nicolasriesco.net) December 2016.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

var main = require('../main');
var assign = require('object-assign');


var gregorianCalendar = main.instance();

/** Implementation of the traditional Chinese calendar.
    Source of calendar tables https://github.com/isee15/Lunar-Solar-Calendar-Converter .
    @class ChineseCalendar
    @param [language=''] {string} The language code (default English) for localisation. */
function ChineseCalendar(language) {
    this.local = this.regionalOptions[language || ''] || this.regionalOptions[''];
}

ChineseCalendar.prototype = new main.baseCalendar;

assign(ChineseCalendar.prototype, {
    /** The calendar name.
        @memberof ChineseCalendar */
    name: 'Chinese',
     /** Julian date of start of Gregorian epoch: 1 January 0001 CE.
        @memberof GregorianCalendar */
    jdEpoch: 1721425.5,
    /** <code>true</code> if has a year zero, <code>false</code> if not.
        @memberof ChineseCalendar */
    hasYearZero: false,
    /** The minimum month number.
        This calendar uses month indices to account for intercalary months. 
        @memberof ChineseCalendar */
    minMonth: 0,
    /** The first month in the year.
        This calendar uses month indices to account for intercalary months. 
        @memberof ChineseCalendar */
    firstMonth: 0,
    /** The minimum day number.
        @memberof ChineseCalendar */
    minDay: 1,

    /** Localisations for the plugin.
        Entries are objects indexed by the language code ('' being the default US/English).
        Each object has the following attributes.
        @memberof ChineseCalendar
        @property name {string} The calendar name.
        @property epochs {string[]} The epoch names.
        @property monthNames {string[]} The long names of the months of the year.
        @property monthNamesShort {string[]} The short names of the months of the year.
        @property dayNames {string[]} The long names of the days of the week.
        @property dayNamesShort {string[]} The short names of the days of the week.
        @property dayNamesMin {string[]} The minimal names of the days of the week.
        @property dateFormat {string} The date format for this calendar.
                See the options on <a href="BaseCalendar.html#formatDate"><code>formatDate</code></a> for details.
        @property firstDay {number} The number of the first day of the week, starting at 0.
        @property isRTL {number} <code>true</code> if this localisation reads right-to-left. */
    regionalOptions: { // Localisations
        '': {
            name: 'Chinese',
            epochs: ['BEC', 'EC'],
            monthNumbers: function(date, padded) {
                if (typeof date === 'string') {
                    var match = date.match(MONTH_NUMBER_REGEXP);
                    return (match) ? match[0] : '';
                }

                var year = this._validateYear(date);
                var monthIndex = date.month();

                var month = '' + this.toChineseMonth(year, monthIndex);

                if (padded && month.length < 2) {
                    month = "0" + month;
                }

                if (this.isIntercalaryMonth(year, monthIndex)) {
                    month += 'i';
                }

                return month;
            },
            monthNames: function(date) {
                if (typeof date === 'string') {
                    var match = date.match(MONTH_NAME_REGEXP);
                    return (match) ? match[0] : '';
                }

                var year = this._validateYear(date);
                var monthIndex = date.month();

                var month = this.toChineseMonth(year, monthIndex);

                var monthName = ['一月','二月','三月','四月','五月','六月',
                    '七月','八月','九月','十月','十一月','十二月'][month - 1];

                if (this.isIntercalaryMonth(year, monthIndex)) {
                    monthName = '闰' + monthName;
                }

                return monthName;
            },
            monthNamesShort: function(date) {
                if (typeof date === 'string') {
                    var match = date.match(MONTH_SHORT_NAME_REGEXP);
                    return (match) ? match[0] : '';
                }

                var year = this._validateYear(date);
                var monthIndex = date.month();

                var month = this.toChineseMonth(year, monthIndex);

                var monthName = ['一','二','三','四','五','六',
                    '七','八','九','十','十一','十二'][month - 1];

                if (this.isIntercalaryMonth(year, monthIndex)) {
                    monthName = '闰' + monthName;
                }

                return monthName;
            },
            parseMonth: function(year, monthString) {
                year = this._validateYear(year);
                var month = parseInt(monthString);
                var isIntercalary;

                if (!isNaN(month)) {
                    var i = monthString[monthString.length - 1];
                    isIntercalary = (i === 'i' || i === 'I');
                } else {
                    if (monthString[0] === '闰') {
                        isIntercalary = true;
                        monthString = monthString.substring(1);
                    }
                    if (monthString[monthString.length - 1] === '月') {
                        monthString = monthString.substring(0, monthString.length - 1);
                    }
                    month = 1 +
                        ['一','二','三','四','五','六',
                        '七','八','九','十','十一','十二'].indexOf(monthString);
                }

                var monthIndex = this.toMonthIndex(year, month, isIntercalary);
                return monthIndex;
            },
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            digits: null,
            dateFormat: 'yyyy/mm/dd',
            firstDay: 1,
            isRTL: false
        }
    },

    /** Check that a candidate date is from the same calendar and is valid.
        @memberof BaseCalendar
        @private
        @param year {CDate|number} The date or the year to validate.
        @param error {string} Error message if invalid.
        @return {number} The year.
        @throws Error if year out of range. */
    _validateYear: function(year, error) {
        if (year.year) {
            year = year.year();
        }

        if (typeof year !== 'number' || year < 1888 || year > 2111) {
            throw error.replace(/\{0\}/, this.local.name);
        }

        return year;
    },

    /** Retrieve the month index (i.e. accounting for intercalary months).
        @memberof ChineseCalendar
        @param year {number} The year.
        @param month {number} The month (1 for first month).
        @param [isIntercalary=false] {boolean} If month is intercalary.
        @return {number} The month index (0 for first month).
        @throws Error if an invalid month/year or a different calendar used. */
    toMonthIndex: function(year, month, isIntercalary) {
        // compute intercalary month in the year (0 if none)
        var intercalaryMonth = this.intercalaryMonth(year);

        // validate month
        var invalidIntercalaryMonth = 
            (isIntercalary && month !== intercalaryMonth);
        if (invalidIntercalaryMonth || month < 1 || month > 12) {
            throw main.local.invalidMonth
                .replace(/\{0\}/, this.local.name);
        }

        // compute month index
        var monthIndex;

        if (!intercalaryMonth) {
            monthIndex = month - 1;
        } else if(!isIntercalary && month <= intercalaryMonth) {
            monthIndex = month - 1;
        } else {
            monthIndex = month;
        }

        return monthIndex;
    },

    /** Retrieve the month (i.e. accounting for intercalary months).
        @memberof ChineseCalendar
        @param year {CDate|number} The date or the year to examine.
        @param monthIndex {number} The month index (0 for first month).
        @return {number} The month (1 for first month).
        @throws Error if an invalid month/year or a different calendar used. */
    toChineseMonth: function(year, monthIndex) {
        if (year.year) {
            year = year.year();
            monthIndex = year.month();
        }

        // compute intercalary month in the year (0 if none)
        var intercalaryMonth = this.intercalaryMonth(year);

        // validate month
        var maxMonthIndex = (intercalaryMonth) ? 12 : 11;
        if (monthIndex < 0 || monthIndex > maxMonthIndex) {
            throw main.local.invalidMonth
                .replace(/\{0\}/, this.local.name);
        }

        // compute Chinese month
        var month;

        if (!intercalaryMonth) {
            month = monthIndex + 1;
        } else if(monthIndex < intercalaryMonth) {
            month = monthIndex + 1;
        } else {
            month = monthIndex;
        }

        return month;
    },

    /** Determine the intercalary month of a year (if any).
        @memberof ChineseCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @return {number} The intercalary month number, or 0 if none.
        @throws Error if an invalid year or a different calendar used. */
    intercalaryMonth: function(year) {
        year = this._validateYear(year);

        var monthDaysTable = LUNAR_MONTH_DAYS[year - LUNAR_MONTH_DAYS[0]];
        var intercalaryMonth = monthDaysTable >> 13;

        return intercalaryMonth;
    },

    /** Determine whether this date is an intercalary month.
        @memberof ChineseCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [monthIndex] {number} The month index to examine.
        @return {boolean} <code>true</code> if this is an intercalary month, <code>false</code> if not.
        @throws Error if an invalid year or a different calendar used. */
    isIntercalaryMonth: function(year, monthIndex) {
        if (year.year) {
            year = year.year();
            monthIndex = year.month();
        }

        var intercalaryMonth = this.intercalaryMonth(year);

        return !!intercalaryMonth && intercalaryMonth === monthIndex;
    },

    /** Determine whether this date is in a leap year.
        @memberof ChineseCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @return {boolean} <code>true</code> if this is a leap year, <code>false</code> if not.
        @throws Error if an invalid year or a different calendar used. */
    leapYear: function(year) {
        return (this.intercalaryMonth(year) !== 0);
    },

    /** Determine the week of the year for a date - ISO 8601.
        @memberof ChineseCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [monthIndex] {number} The month index to examine.
        @param [day] {number} The day to examine.
        @return {number} The week of the year.
        @throws Error if an invalid date or a different calendar used. */
    weekOfYear: function(year, monthIndex, day) {
        // compute Chinese new year
        var validatedYear =
            this._validateYear(year, main.local.invalidyear);
        var packedDate =
            CHINESE_NEW_YEAR[validatedYear - CHINESE_NEW_YEAR[0]];

        var y = (packedDate >> 9) & 0xFFF;
        var m = (packedDate >> 5) & 0x0F;
        var d = packedDate & 0x1F;
        
        // find first Thrusday of the year
        var firstThursday;
        firstThursday = gregorianCalendar.newDate(y, m, d);
        firstThursday.add(4 - (firstThursday.dayOfWeek() || 7), 'd');

        // compute days from first Thursday
        var offset =
            this.toJD(year, monthIndex, day) - firstThursday.toJD();
        return 1 + Math.floor(offset / 7);
    },

    /** Retrieve the number of months in a year.
        @memberof ChineseCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @return {number} The number of months.
        @throws Error if an invalid year or a different calendar used. */
    monthsInYear: function(year) {
        return (this.leapYear(year)) ? 13 : 12;
    },

    /** Retrieve the number of days in a month.
        @memberof ChineseCalendar
        @param year {CDate|number} The date to examine or the year of the month.
        @param [monthIndex] {number} The month index.
        @return {number} The number of days in this month.
        @throws Error if an invalid month/year or a different calendar used. */
    daysInMonth: function(year, monthIndex) {
        if (year.year) {
            monthIndex = year.month();
            year = year.year();
        }

        year = this._validateYear(year);

        var monthDaysTable = LUNAR_MONTH_DAYS[year - LUNAR_MONTH_DAYS[0]];

        var intercalaryMonth = monthDaysTable >> 13;
        var maxMonthIndex = (intercalaryMonth) ? 12 : 11;
        if (monthIndex > maxMonthIndex) {
            throw main.local.invalidMonth
                .replace(/\{0\}/, this.local.name);
        }

        var daysInMonth = (monthDaysTable & (1 << (12 - monthIndex))) ?
            30 : 29;

        return daysInMonth;
    },

    /** Determine whether this date is a week day.
        @memberof ChineseCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [monthIndex] {number} The month index to examine.
        @param [day] {number} The day to examine.
        @return {boolean} <code>true</code> if a week day, <code>false</code> if not.
        @throws Error if an invalid date or a different calendar used. */
    weekDay: function(year, monthIndex, day) {
        return (this.dayOfWeek(year, monthIndex, day) || 7) < 6;
    },

    /** Retrieve the Julian date equivalent for this date,
        i.e. days since January 1, 4713 BCE Greenwich noon.
        @memberof ChineseCalendar
        @param year {CDate|number} The date to convert or the year to convert.
        @param [monthIndex] {number} The month index to convert.
        @param [day] {number} The day to convert.
        @return {number} The equivalent Julian date.
        @throws Error if an invalid date or a different calendar used. */
    toJD: function(year, monthIndex, day) {
        var date = this._validate(year, month, day, main.local.invalidDate);
        year = this._validateYear(date.year());
        monthIndex = date.month();
        day = date.day();

        var isIntercalary = this.isIntercalaryMonth(year, monthIndex);
        var month = this.toChineseMonth(year, monthIndex);

        var solar = toSolar(year, month, day, isIntercalary);

        return gregorianCalendar.toJD(solar.year, solar.month, solar.day);
    },

    /** Create a new date from a Julian date.
        @memberof ChineseCalendar
        @param jd {number} The Julian date to convert.
        @return {CDate} The equivalent date. */
    fromJD: function(jd) {
        var date = gregorianCalendar.fromJD(jd);
        var lunar = toLunar(date.year(), date.month(), date.day());
        var monthIndex = this.toMonthIndex(
            lunar.year, lunar.month, lunar.isIntercalary);
        return this.newDate(lunar.year, monthIndex, lunar.day);
    },

    /** Create a new date from a string.
        @memberof ChineseCalendar
        @param dateString {string} String representing a Chinese date
        @return {CDate} The new date.
        @throws Error if an invalid date. */
    fromString: function(dateString) {
        var match = dateString.match(DATE_REGEXP);

        var year = this._validateYear(+match[1]);

        var month = +match[2];
        var isIntercalary = !!match[3];
        var monthIndex = this.toMonthIndex(year, month, isIntercalary);

        var day = +match[4];

        return this.newDate(year, monthIndex, day);
    },

    /** Add period(s) to a date.
        Cater for no year zero.
        @memberof ChineseCalendar
        @param date {CDate} The starting date.
        @param offset {number} The number of periods to adjust by.
        @param period {string} One of 'y' for year, 'm' for month, 'w' for week, 'd' for day.
        @return {CDate} The updated date.
        @throws Error if a different calendar used. */
    add: function(date, offset, period) {
        var year = date.year();
        var monthIndex = date.month();
        var isIntercalary = this.isIntercalaryMonth(year, monthIndex);
        var month = this.toChineseMonth(year, monthIndex);

        var cdate = Object.getPrototypeOf(ChineseCalendar.prototype)
            .add.call(this, date, offset, period);

        if (period === 'y') {
            // Resync month
            var resultYear = cdate.year();
            var resultMonthIndex = cdate.month();

            // Using the fact the month index of an intercalary month
            // equals its month number:
            var resultCanBeIntercalaryMonth =
                this.isIntercalaryMonth(resultYear, month);

            var correctedMonthIndex =
                (isIntercalary && resultCanBeIntercalaryMonth) ?
                this.toMonthIndex(resultYear, month, true) :
                this.toMonthIndex(resultYear, month, false);

            if (correctedMonthIndex !== resultMonthIndex) {
                cdate.month(correctedMonthIndex);
            }
        }

        return cdate;
    },
});

// Used by ChineseCalendar.prototype.fromString
var DATE_REGEXP = /^\s*(-?\d\d\d\d|\d\d)[-/](\d?\d)([iI]?)[-/](\d?\d)/m;
var MONTH_NUMBER_REGEXP = /^\d?\d[iI]?/m;
var MONTH_NAME_REGEXP = /^闰?十?[一二三四五六七八九]?月/m;
var MONTH_SHORT_NAME_REGEXP = /^闰?十?[一二三四五六七八九]?/m;

// Chinese calendar implementation
main.calendars.chinese = ChineseCalendar;

// Chinese calendar tables from year 1888 to 2111
//
// Source:
// https://github.com/isee15/Lunar-Solar-Calendar-Converter.git

// Table of intercalary months and days per month from year 1888 to 2111
//
// bit (12 - i):        days in the i^th month
//                      (= 0 if i^th lunar month has 29 days)
//                      (= 1 if i^th lunar month has 30 days)
//                      (first month in lunar year is i = 0)
// bits (13,14,15,16):  intercalary month
//                      (= 0 if lunar year has no intercalary month)
var LUNAR_MONTH_DAYS = [1887, 0x1694, 0x16aa, 0x4ad5,
    0xab6, 0xc4b7, 0x4ae, 0xa56, 0xb52a, 0x1d2a, 0xd54, 0x75aa, 0x156a,
    0x1096d, 0x95c, 0x14ae, 0xaa4d, 0x1a4c, 0x1b2a, 0x8d55, 0xad4,
    0x135a, 0x495d, 0x95c, 0xd49b, 0x149a, 0x1a4a, 0xbaa5, 0x16a8,
    0x1ad4, 0x52da, 0x12b6, 0xe937, 0x92e, 0x1496, 0xb64b, 0xd4a,
    0xda8, 0x95b5, 0x56c, 0x12ae, 0x492f, 0x92e, 0xcc96, 0x1a94,
    0x1d4a, 0xada9, 0xb5a, 0x56c, 0x726e, 0x125c, 0xf92d, 0x192a,
    0x1a94, 0xdb4a, 0x16aa, 0xad4, 0x955b, 0x4ba, 0x125a, 0x592b,
    0x152a, 0xf695, 0xd94, 0x16aa, 0xaab5, 0x9b4, 0x14b6, 0x6a57,
    0xa56, 0x1152a, 0x1d2a, 0xd54, 0xd5aa, 0x156a, 0x96c, 0x94ae,
    0x14ae, 0xa4c, 0x7d26, 0x1b2a, 0xeb55, 0xad4, 0x12da, 0xa95d,
    0x95a, 0x149a, 0x9a4d, 0x1a4a, 0x11aa5, 0x16a8, 0x16d4, 0xd2da,
    0x12b6, 0x936, 0x9497, 0x1496, 0x1564b, 0xd4a, 0xda8, 0xd5b4,
    0x156c, 0x12ae, 0xa92f, 0x92e, 0xc96, 0x6d4a, 0x1d4a, 0x10d65,
    0xb58, 0x156c, 0xb26d, 0x125c, 0x192c, 0x9a95, 0x1a94, 0x1b4a,
    0x4b55, 0xad4, 0xf55b, 0x4ba, 0x125a, 0xb92b, 0x152a, 0x1694,
    0x96aa, 0x15aa, 0x12ab5, 0x974, 0x14b6, 0xca57, 0xa56, 0x1526,
    0x8e95, 0xd54, 0x15aa, 0x49b5, 0x96c, 0xd4ae, 0x149c, 0x1a4c,
    0xbd26, 0x1aa6, 0xb54, 0x6d6a, 0x12da, 0x1695d, 0x95a, 0x149a,
    0xda4b, 0x1a4a, 0x1aa4, 0xbb54, 0x16b4, 0xada, 0x495b, 0x936,
    0xf497, 0x1496, 0x154a, 0xb6a5, 0xda4, 0x15b4, 0x6ab6, 0x126e,
    0x1092f, 0x92e, 0xc96, 0xcd4a, 0x1d4a, 0xd64, 0x956c, 0x155c,
    0x125c, 0x792e, 0x192c, 0xfa95, 0x1a94, 0x1b4a, 0xab55, 0xad4,
    0x14da, 0x8a5d, 0xa5a, 0x1152b, 0x152a, 0x1694, 0xd6aa, 0x15aa,
    0xab4, 0x94ba, 0x14b6, 0xa56, 0x7527, 0xd26, 0xee53, 0xd54, 0x15aa,
    0xa9b5, 0x96c, 0x14ae, 0x8a4e, 0x1a4c, 0x11d26, 0x1aa4, 0x1b54,
    0xcd6a, 0xada, 0x95c, 0x949d, 0x149a, 0x1a2a, 0x5b25, 0x1aa4,
    0xfb52, 0x16b4, 0xaba, 0xa95b, 0x936, 0x1496, 0x9a4b, 0x154a,
    0x136a5, 0xda4, 0x15ac];

// Table of Chinese New Years from year 1888 to 2111
// 
// bits (0 to 4):   solar day
// bits (5 to 8):   solar month
// bits (9 to 20):  solar year
var CHINESE_NEW_YEAR = [1887, 0xec04c, 0xec23f, 0xec435, 0xec649,
    0xec83e, 0xeca51, 0xecc46, 0xece3a, 0xed04d, 0xed242, 0xed436,
    0xed64a, 0xed83f, 0xeda53, 0xedc48, 0xede3d, 0xee050, 0xee244,
    0xee439, 0xee64d, 0xee842, 0xeea36, 0xeec4a, 0xeee3e, 0xef052,
    0xef246, 0xef43a, 0xef64e, 0xef843, 0xefa37, 0xefc4b, 0xefe41,
    0xf0054, 0xf0248, 0xf043c, 0xf0650, 0xf0845, 0xf0a38, 0xf0c4d,
    0xf0e42, 0xf1037, 0xf124a, 0xf143e, 0xf1651, 0xf1846, 0xf1a3a,
    0xf1c4e, 0xf1e44, 0xf2038, 0xf224b, 0xf243f, 0xf2653, 0xf2848,
    0xf2a3b, 0xf2c4f, 0xf2e45, 0xf3039, 0xf324d, 0xf3442, 0xf3636,
    0xf384a, 0xf3a3d, 0xf3c51, 0xf3e46, 0xf403b, 0xf424e, 0xf4443,
    0xf4638, 0xf484c, 0xf4a3f, 0xf4c52, 0xf4e48, 0xf503c, 0xf524f,
    0xf5445, 0xf5639, 0xf584d, 0xf5a42, 0xf5c35, 0xf5e49, 0xf603e,
    0xf6251, 0xf6446, 0xf663b, 0xf684f, 0xf6a43, 0xf6c37, 0xf6e4b,
    0xf703f, 0xf7252, 0xf7447, 0xf763c, 0xf7850, 0xf7a45, 0xf7c39,
    0xf7e4d, 0xf8042, 0xf8254, 0xf8449, 0xf863d, 0xf8851, 0xf8a46,
    0xf8c3b, 0xf8e4f, 0xf9044, 0xf9237, 0xf944a, 0xf963f, 0xf9853,
    0xf9a47, 0xf9c3c, 0xf9e50, 0xfa045, 0xfa238, 0xfa44c, 0xfa641,
    0xfa836, 0xfaa49, 0xfac3d, 0xfae52, 0xfb047, 0xfb23a, 0xfb44e,
    0xfb643, 0xfb837, 0xfba4a, 0xfbc3f, 0xfbe53, 0xfc048, 0xfc23c,
    0xfc450, 0xfc645, 0xfc839, 0xfca4c, 0xfcc41, 0xfce36, 0xfd04a,
    0xfd23d, 0xfd451, 0xfd646, 0xfd83a, 0xfda4d, 0xfdc43, 0xfde37,
    0xfe04b, 0xfe23f, 0xfe453, 0xfe648, 0xfe83c, 0xfea4f, 0xfec44,
    0xfee38, 0xff04c, 0xff241, 0xff436, 0xff64a, 0xff83e, 0xffa51,
    0xffc46, 0xffe3a, 0x10004e, 0x100242, 0x100437, 0x10064b, 0x100841,
    0x100a53, 0x100c48, 0x100e3c, 0x10104f, 0x101244, 0x101438,
    0x10164c, 0x101842, 0x101a35, 0x101c49, 0x101e3d, 0x102051,
    0x102245, 0x10243a, 0x10264e, 0x102843, 0x102a37, 0x102c4b,
    0x102e3f, 0x103053, 0x103247, 0x10343b, 0x10364f, 0x103845,
    0x103a38, 0x103c4c, 0x103e42, 0x104036, 0x104249, 0x10443d,
    0x104651, 0x104846, 0x104a3a, 0x104c4e, 0x104e43, 0x105038,
    0x10524a, 0x10543e, 0x105652, 0x105847, 0x105a3b, 0x105c4f,
    0x105e45, 0x106039, 0x10624c, 0x106441, 0x106635, 0x106849,
    0x106a3d, 0x106c51, 0x106e47, 0x10703c, 0x10724f, 0x107444,
    0x107638, 0x10784c, 0x107a3f, 0x107c53, 0x107e48];

function toLunar(yearOrDate, monthOrResult, day, result) {
    var solarDate;
    var lunarDate;

    if(typeof yearOrDate === 'object') {
        solarDate = yearOrDate;
        lunarDate = monthOrResult || {};

    } else {
        var isValidYear = (typeof yearOrDate === 'number') &&
            (yearOrDate >= 1888) && (yearOrDate <= 2111);
        if(!isValidYear)
            throw new Error("Solar year outside range 1888-2111");

        var isValidMonth = (typeof monthOrResult === 'number') &&
            (monthOrResult >= 1) && (monthOrResult <= 12);
        if(!isValidMonth)
            throw new Error("Solar month outside range 1 - 12");

        var isValidDay = (typeof day === 'number') && (day >= 1) && (day <= 31);
        if(!isValidDay)
            throw new Error("Solar day outside range 1 - 31");

        solarDate = {
            year: yearOrDate,
            month: monthOrResult,
            day: day,
        };
        lunarDate = result || {};
    }

    // Compute Chinese new year and lunar year
    var chineseNewYearPackedDate =
        CHINESE_NEW_YEAR[solarDate.year - CHINESE_NEW_YEAR[0]];

    var packedDate = (solarDate.year << 9) | (solarDate.month << 5)
        | solarDate.day;

    lunarDate.year = (packedDate >= chineseNewYearPackedDate) ?
        solarDate.year :
        solarDate.year - 1;

    chineseNewYearPackedDate =
        CHINESE_NEW_YEAR[lunarDate.year - CHINESE_NEW_YEAR[0]];

    var y = (chineseNewYearPackedDate >> 9) & 0xFFF;
    var m = (chineseNewYearPackedDate >> 5) & 0x0F;
    var d = chineseNewYearPackedDate & 0x1F;

    // Compute days from new year
    var daysFromNewYear;

    var chineseNewYearJSDate = new Date(y, m -1, d);
    var jsDate = new Date(solarDate.year, solarDate.month - 1, solarDate.day);

    daysFromNewYear = Math.round(
        (jsDate - chineseNewYearJSDate) / (24 * 3600 * 1000));

    // Compute lunar month and day
    var monthDaysTable = LUNAR_MONTH_DAYS[lunarDate.year - LUNAR_MONTH_DAYS[0]];

    var i;
    for(i = 0; i < 13; i++) {
        var daysInMonth = (monthDaysTable & (1 << (12 - i))) ? 30 : 29;

        if (daysFromNewYear < daysInMonth) {
            break;
        }

        daysFromNewYear -= daysInMonth;
    }

    var intercalaryMonth = monthDaysTable >> 13;
    if (!intercalaryMonth || i < intercalaryMonth) {
        lunarDate.isIntercalary = false;
        lunarDate.month = 1 + i;
    } else if (i === intercalaryMonth) {
        lunarDate.isIntercalary = true;
        lunarDate.month = i;
    } else {
        lunarDate.isIntercalary = false;
        lunarDate.month = i;
    }

    lunarDate.day = 1 + daysFromNewYear;

    return lunarDate;
}

function toSolar(yearOrDate, monthOrResult, day, isIntercalaryOrResult, result) {
    var solarDate;
    var lunarDate;

    if(typeof yearOrDate === 'object') {
        lunarDate = yearOrDate;
        solarDate = monthOrResult || {};

    } else {
        var isValidYear = (typeof yearOrDate === 'number') &&
            (yearOrDate >= 1888) && (yearOrDate <= 2111);
        if(!isValidYear)
            throw new Error("Lunar year outside range 1888-2111");

        var isValidMonth = (typeof monthOrResult === 'number') &&
            (monthOrResult >= 1) && (monthOrResult <= 12);
        if(!isValidMonth)
            throw new Error("Lunar month outside range 1 - 12");

        var isValidDay = (typeof day === 'number') && (day >= 1) && (day <= 30);
        if(!isValidDay)
            throw new Error("Lunar day outside range 1 - 30");

        var isIntercalary;
        if(typeof isIntercalaryOrResult === 'object') {
            isIntercalary = false;
            solarDate = isIntercalaryOrResult;
        } else {
            isIntercalary = !!isIntercalaryOrResult;
            solarDate = result || {};
        }

        lunarDate = {
            year: yearOrDate,
            month: monthOrResult,
            day: day,
            isIntercalary: isIntercalary,
        };
    }

    // Compute days from new year
    var daysFromNewYear;

    daysFromNewYear = lunarDate.day - 1;

    var monthDaysTable = LUNAR_MONTH_DAYS[lunarDate.year - LUNAR_MONTH_DAYS[0]];
    var intercalaryMonth = monthDaysTable >> 13;

    var monthsFromNewYear;
    if (!intercalaryMonth) {
        monthsFromNewYear = lunarDate.month - 1;
    } else if (lunarDate.month > intercalaryMonth) {
        monthsFromNewYear = lunarDate.month;
    } else if (lunarDate.isIntercalary) {
        monthsFromNewYear = lunarDate.month;
    } else {
        monthsFromNewYear = lunarDate.month - 1;
    }

    for(var i = 0; i < monthsFromNewYear; i++) {
        var daysInMonth = (monthDaysTable & (1 << (12 - i))) ? 30 : 29;
        daysFromNewYear += daysInMonth;
    }

    // Compute Chinese new year
    var packedDate = CHINESE_NEW_YEAR[lunarDate.year - CHINESE_NEW_YEAR[0]];

    var y = (packedDate >> 9) & 0xFFF;
    var m = (packedDate >> 5) & 0x0F;
    var d = packedDate & 0x1F;

    // Compute solar date
    var jsDate = new Date(y, m - 1, d + daysFromNewYear);

    solarDate.year = jsDate.getFullYear();
    solarDate.month = 1 + jsDate.getMonth();
    solarDate.day = jsDate.getDate();

    return solarDate;
}

