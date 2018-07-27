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
   Discworld calendar for jQuery v2.0.2.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2016.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

var main = require('../main');
var assign = require('object-assign');


/** Implementation of the Discworld calendar - Unseen University version.
    See also <a href="http://wiki.lspace.org/mediawiki/Discworld_calendar">http://wiki.lspace.org/mediawiki/Discworld_calendar</a>
    and <a href="http://discworld.wikia.com/wiki/Discworld_calendar">http://discworld.wikia.com/wiki/Discworld_calendar</a>.
    @class DiscworldCalendar
    @param [language=''] {string} The language code (default English) for localisation. */
function DiscworldCalendar(language) {
    this.local = this.regionalOptions[language || ''] || this.regionalOptions[''];
}

DiscworldCalendar.prototype = new main.baseCalendar;

assign(DiscworldCalendar.prototype, {
    /** The calendar name.
        @memberof DiscworldCalendar */
    name: 'Discworld',
    /** Julian date of start of Discworld epoch: 1 January 0001 CE.
        @memberof DiscworldCalendar */
    jdEpoch: 1721425.5,
    /** Days per month in a common year.
        @memberof DiscworldCalendar */
    daysPerMonth: [16, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32],
    /** <code>true</code> if has a year zero, <code>false</code> if not.
        @memberof DiscworldCalendar */
    hasYearZero: false,
    /** The minimum month number.
        @memberof DiscworldCalendar */
    minMonth: 1,
    /** The first month in the year.
        @memberof DiscworldCalendar */
    firstMonth: 1,
    /** The minimum day number.
        @memberof DiscworldCalendar */
    minDay: 1,

    /** Localisations for the plugin.
        Entries are objects indexed by the language code ('' being the default US/English).
        Each object has the following attributes.
        @memberof DiscworldCalendar
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
            name: 'Discworld',
            epochs: ['BUC', 'UC'],
            monthNames: ['Ick', 'Offle', 'February', 'March', 'April', 'May', 'June',
            'Grune', 'August', 'Spune', 'Sektober', 'Ember', 'December'],
            monthNamesShort: ['Ick', 'Off', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Gru', 'Aug', 'Spu', 'Sek', 'Emb', 'Dec'],
            dayNames: ['Sunday', 'Octeday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Oct', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su', 'Oc', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            digits: null,
            dateFormat: 'yyyy/mm/dd',
            firstDay: 2,
            isRTL: false
        }
    },

    /** Determine whether this date is in a leap year.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @return {boolean} <code>true</code> if this is a leap year, <code>false</code> if not.
        @throws Error if an invalid year or a different calendar used. */
    leapYear: function(year) {
        this._validate(year, this.minMonth, this.minDay, main.local.invalidYear);
        return false;
    },

    /** Retrieve the number of months in a year.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @return {number} The number of months.
        @throws Error if an invalid year or a different calendar used. */
    monthsInYear: function(year) {
        this._validate(year, this.minMonth, this.minDay, main.local.invalidYear);
        return 13;
    },

    /** Retrieve the number of days in a year.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @return {number} The number of days.
        @throws Error if an invalid year or a different calendar used. */
    daysInYear: function(year) {
        this._validate(year, this.minMonth, this.minDay, main.local.invalidYear);
        return 400;
    },

    /** Determine the week of the year for a date.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [month] {number} The month to examine.
        @param [day] {number} The day to examine.
        @return {number} The week of the year.
        @throws Error if an invalid date or a different calendar used. */
    weekOfYear: function(year, month, day) {
        // Find Sunday of this week starting on Sunday
        var checkDate = this.newDate(year, month, day);
        checkDate.add(-checkDate.dayOfWeek(), 'd');
        return Math.floor((checkDate.dayOfYear() - 1) / 8) + 1;
    },

    /** Retrieve the number of days in a month.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year of the month.
        @param [month] {number} The month.
        @return {number} The number of days in this month.
        @throws Error if an invalid month/year or a different calendar used. */
    daysInMonth: function(year, month) {
        var date = this._validate(year, month, this.minDay, main.local.invalidMonth);
        return this.daysPerMonth[date.month() - 1];
    },

    /** Retrieve the number of days in a week.
        @memberof DiscworldCalendar
        @return {number} The number of days. */
    daysInWeek: function() {
        return 8;
    },

    /** Retrieve the day of the week for a date.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [month] {number} The month to examine.
        @param [day] {number} The day to examine.
        @return {number} The day of the week: 0 to number of days - 1.
        @throws Error if an invalid date or a different calendar used. */
    dayOfWeek: function(year, month, day) {
        var date = this._validate(year, month, day, main.local.invalidDate);
        return (date.day() + 1) % 8;
    },

    /** Determine whether this date is a week day.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [month] {number} The month to examine.
        @param [day] {number} The day to examine.
        @return {boolean} <code>true</code> if a week day, <code>false</code> if not.
        @throws Error if an invalid date or a different calendar used. */
    weekDay: function(year, month, day) {
        var dow = this.dayOfWeek(year, month, day);
        return (dow >= 2 && dow <= 6);
    },

    /** Retrieve additional information about a date.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to examine or the year to examine.
        @param [month] {number} The month to examine.
        @param [day] {number} The day to examine.
        @return {object} Additional information - contents depends on calendar.
        @throws Error if an invalid date or a different calendar used. */
    extraInfo: function(year, month, day) {
        var date = this._validate(year, month, day, main.local.invalidDate);
        return {century: centuries[Math.floor((date.year() - 1) / 100) + 1] || ''};
    },

    /** Retrieve the Julian date equivalent for this date,
        i.e. days since January 1, 4713 BCE Greenwich noon.
        @memberof DiscworldCalendar
        @param year {CDate|number} The date to convert or the year to convert.
        @param [month] {number} The month to convert.
        @param [day] {number} The day to convert.
        @return {number} The equivalent Julian date.
        @throws Error if an invalid date or a different calendar used. */
    toJD: function(year, month, day) {
        var date = this._validate(year, month, day, main.local.invalidDate);
        year = date.year() + (date.year() < 0 ? 1 : 0);
        month = date.month();
        day = date.day();
        return day + (month > 1 ? 16 : 0) + (month > 2 ? (month - 2) * 32 : 0) +
            (year - 1) * 400 + this.jdEpoch - 1;
    },

    /** Create a new date from a Julian date.
        @memberof DiscworldCalendar
        @param jd {number} The Julian date to convert.
        @return {CDate} The equivalent date. */
    fromJD: function(jd) {
        jd = Math.floor(jd + 0.5) - Math.floor(this.jdEpoch) - 1;
        var year = Math.floor(jd / 400) + 1;
        jd -= (year - 1) * 400;
        jd += (jd > 15 ? 16 : 0);
        var month = Math.floor(jd / 32) + 1;
        var day = jd - (month - 1) * 32 + 1;
        return this.newDate(year <= 0 ? year - 1 : year, month, day);
    }
});

// Names of the centuries
var centuries = {
    20: 'Fruitbat',
    21: 'Anchovy'
};

// Discworld calendar implementation
main.calendars.discworld = DiscworldCalendar;

