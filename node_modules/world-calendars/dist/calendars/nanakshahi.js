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
   Nanakshahi calendar for jQuery v2.0.2.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2016.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

var main = require('../main');
var assign = require('object-assign');


/** Implementation of the Nanakshahi calendar.
    See also <a href="https://en.wikipedia.org/wiki/Nanakshahi_calendar">https://en.wikipedia.org/wiki/Nanakshahi_calendar</a>.
    @class NanakshahiCalendar
    @param [language=''] {string} The language code (default English) for localisation. */
function NanakshahiCalendar(language) {
    this.local = this.regionalOptions[language || ''] || this.regionalOptions[''];
}

NanakshahiCalendar.prototype = new main.baseCalendar;

var gregorian = main.instance('gregorian');

assign(NanakshahiCalendar.prototype, {
    /** The calendar name.
        @memberof NanakshahiCalendar */
    name: 'Nanakshahi',
    /** Julian date of start of Nanakshahi epoch: 14 March 1469 CE.
        @memberof NanakshahiCalendar */
    jdEpoch: 2257673.5,
    /** Days per month in a common year.
        @memberof NanakshahiCalendar */
    daysPerMonth: [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30],
    /** <code>true</code> if has a year zero, <code>false</code> if not.
        @memberof NanakshahiCalendar */
    hasYearZero: false,
    /** The minimum month number.
        @memberof NanakshahiCalendar */
    minMonth: 1,
    /** The first month in the year.
        @memberof NanakshahiCalendar */
    firstMonth: 1,
    /** The minimum day number.
        @memberof NanakshahiCalendar */
    minDay: 1,

    /** Localisations for the plugin.
        Entries are objects indexed by the language code ('' being the default US/English).
        Each object has the following attributes.
        @memberof NanakshahiCalendar
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
            name: 'Nanakshahi',
            epochs: ['BN', 'AN'],
            monthNames: ['Chet', 'Vaisakh', 'Jeth', 'Harh', 'Sawan', 'Bhadon',
            'Assu', 'Katak', 'Maghar', 'Poh', 'Magh', 'Phagun'],
            monthNamesShort: ['Che', 'Vai', 'Jet', 'Har', 'Saw', 'Bha', 'Ass', 'Kat', 'Mgr', 'Poh', 'Mgh', 'Pha'],
            dayNames: ['Somvaar', 'Mangalvar', 'Budhvaar', 'Veervaar', 'Shukarvaar', 'Sanicharvaar', 'Etvaar'],
            dayNamesShort: ['Som', 'Mangal', 'Budh', 'Veer', 'Shukar', 'Sanichar', 'Et'],
            dayNamesMin: ['So', 'Ma', 'Bu', 'Ve', 'Sh', 'Sa', 'Et'],
            digits: null,
            dateFormat: 'dd-mm-yyyy',
            firstDay: 0,
            isRTL: false
        }
    },

    /** Determine whether this date is in a leap year.
        @memberof NanakshahiCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @return {boolean} <code>true</code> if this is a leap year, <code>false</code> if not.
        @throws Error if an invalid year or a different calendar used. */
    leapYear: function(year) {
        var date = this._validate(year, this.minMonth, this.minDay,
            main.local.invalidYear || main.regionalOptions[''].invalidYear);
        return gregorian.leapYear(date.year() + (date.year() < 1 ? 1 : 0) + 1469);
    },

    /** Determine the week of the year for a date.
        @memberof NanakshahiCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [month] {number} The month to examine.
        @param [day] {number} The day to examine.
        @return {number} The week of the year.
        @throws Error if an invalid date or a different calendar used. */
    weekOfYear: function(year, month, day) {
        // Find Monday of this week starting on Monday
        var checkDate = this.newDate(year, month, day);
        checkDate.add(1 - (checkDate.dayOfWeek() || 7), 'd');
        return Math.floor((checkDate.dayOfYear() - 1) / 7) + 1;
    },

    /** Retrieve the number of days in a month.
        @memberof NanakshahiCalendar
        @param year {CDate|number} The date to examine or the year of the month.
        @param [month] {number} The month.
        @return {number} The number of days in this month.
        @throws Error if an invalid month/year or a different calendar used. */
    daysInMonth: function(year, month) {
        var date = this._validate(year, month, this.minDay, main.local.invalidMonth);
        return this.daysPerMonth[date.month() - 1] +
            (date.month() === 12 && this.leapYear(date.year()) ? 1 : 0);
    },

    /** Determine whether this date is a week day.
        @memberof NanakshahiCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [month] {number} The month to examine.
        @param [day] {number} The day to examine.
        @return {boolean} <code>true</code> if a week day, <code>false</code> if not.
        @throws Error if an invalid date or a different calendar used. */
    weekDay: function(year, month, day) {
        return (this.dayOfWeek(year, month, day) || 7) < 6;
    },

    /** Retrieve the Julian date equivalent for this date,
        i.e. days since January 1, 4713 BCE Greenwich noon.
        @memberof NanakshahiCalendar
        @param year {CDate|number} The date to convert or the year to convert.
        @param [month] {number} The month to convert.
        @param [day] {number} The day to convert.
        @return {number} The equivalent Julian date.
        @throws Error if an invalid date or a different calendar used. */
    toJD: function(year, month, day) {
        var date = this._validate(year, month, day, main.local.invalidMonth);
        var year = date.year();
        if (year < 0) { year++; } // No year zero
        var doy = date.day();
        for (var m = 1; m < date.month(); m++) {
            doy += this.daysPerMonth[m - 1];
        }
        return doy + gregorian.toJD(year + 1468, 3, 13);
    },

    /** Create a new date from a Julian date.
        @memberof NanakshahiCalendar
        @param jd {number} The Julian date to convert.
        @return {CDate} The equivalent date. */
    fromJD: function(jd) {
        jd = Math.floor(jd + 0.5);
        var year = Math.floor((jd - (this.jdEpoch - 1)) / 366);
        while (jd >= this.toJD(year + 1, 1, 1)) {
            year++;
        }
        var day = jd - Math.floor(this.toJD(year, 1, 1) + 0.5) + 1;
        var month = 1;
        while (day > this.daysInMonth(year, month)) {
            day -= this.daysInMonth(year, month);
            month++;
        }
        return this.newDate(year, month, day);
    }
});

// Nanakshahi calendar implementation
main.calendars.nanakshahi = NanakshahiCalendar;

