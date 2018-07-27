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
   Calendars extras for jQuery v2.0.2.
   Written by Keith Wood (wood.keith{at}optusnet.com.au) August 2009.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

var assign = require('object-assign');
var main = require('./main');


assign(main.regionalOptions[''], {
    invalidArguments: 'Invalid arguments',
    invalidFormat: 'Cannot format a date from another calendar',
    missingNumberAt: 'Missing number at position {0}',
    unknownNameAt: 'Unknown name at position {0}',
    unexpectedLiteralAt: 'Unexpected literal at position {0}',
    unexpectedText: 'Additional text found at end'
});
main.local = main.regionalOptions[''];

assign(main.cdate.prototype, {

    /** Format this date.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof CDate
        @param [format] {string} The date format to use (see <a href="BaseCalendar.html#formatDate"><code>formatDate</code></a>).
        @param [settings] {object} Options for the <code>formatDate</code> function.
        @return {string} The formatted date. */
    formatDate: function(format, settings) {
        if (typeof format !== 'string') {
            settings = format;
            format = '';
        }
        return this._calendar.formatDate(format || '', this, settings);
    }
});

assign(main.baseCalendar.prototype, {

    UNIX_EPOCH: main.instance().newDate(1970, 1, 1).toJD(),
    SECS_PER_DAY: 24 * 60 * 60,
    TICKS_EPOCH: main.instance().jdEpoch, // 1 January 0001 CE
    TICKS_PER_DAY: 24 * 60 * 60 * 10000000,

    /** Date form for ATOM (RFC 3339/ISO 8601).
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    ATOM: 'yyyy-mm-dd',
    /** Date form for cookies.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    COOKIE: 'D, dd M yyyy',
    /** Date form for full date.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    FULL: 'DD, MM d, yyyy',
    /** Date form for ISO 8601.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    ISO_8601: 'yyyy-mm-dd',
    /** Date form for Julian date.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    JULIAN: 'J',
    /** Date form for RFC 822.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    RFC_822: 'D, d M yy',
    /** Date form for RFC 850.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    RFC_850: 'DD, dd-M-yy',
    /** Date form for RFC 1036.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    RFC_1036: 'D, d M yy',
    /** Date form for RFC 1123.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    RFC_1123: 'D, d M yyyy',
    /** Date form for RFC 2822.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    RFC_2822: 'D, d M yyyy',
    /** Date form for RSS (RFC 822).
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    RSS: 'D, d M yy',
    /** Date form for Windows ticks.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    TICKS: '!',
    /** Date form for Unix timestamp.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    TIMESTAMP: '@',
    /** Date form for W3c (ISO 8601).
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar */
    W3C: 'yyyy-mm-dd',

    /** Format a date object into a string value.
        The format can be combinations of the following:
        <ul>
        <li>d  - day of month (no leading zero)</li>
        <li>dd - day of month (two digit)</li>
        <li>o  - day of year (no leading zeros)</li>
        <li>oo - day of year (three digit)</li>
        <li>D  - day name short</li>
        <li>DD - day name long</li>
        <li>w  - week of year (no leading zero)</li>
        <li>ww - week of year (two digit)</li>
        <li>m  - month of year (no leading zero)</li>
        <li>mm - month of year (two digit)</li>
        <li>M  - month name short</li>
        <li>MM - month name long</li>
        <li>yy - year (two digit)</li>
        <li>yyyy - year (four digit)</li>
        <li>YYYY - formatted year</li>
        <li>J  - Julian date (days since January 1, 4713 BCE Greenwich noon)</li>
        <li>@  - Unix timestamp (s since 01/01/1970)</li>
        <li>!  - Windows ticks (100ns since 01/01/0001)</li>
        <li>'...' - literal text</li>
        <li>'' - single quote</li>
        </ul>
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar
        @param [format] {string} The desired format of the date (defaults to calendar format).
        @param date {CDate} The date value to format.
        @param [settings] {object} Addition options, whose attributes include:
        @property [dayNamesShort] {string[]} Abbreviated names of the days from Sunday.
        @property [dayNames] {string[]} Names of the days from Sunday.
        @property [monthNamesShort] {string[]} Abbreviated names of the months.
        @property [monthNames] {string[]} Names of the months.
        @property [calculateWeek] {CalendarsPickerCalculateWeek} Function that determines week of the year.
        @property [localNumbers=false] {boolean} <code>true</code> to localise numbers (if available),
                  <code>false</code> to use normal Arabic numerals.
        @return {string} The date in the above format.
        @throws Errors if the date is from a different calendar. */
    formatDate: function(format, date, settings) {
        if (typeof format !== 'string') {
            settings = date;
            date = format;
            format = '';
        }
        if (!date) {
            return '';
        }
        if (date.calendar() !== this) {
            throw main.local.invalidFormat || main.regionalOptions[''].invalidFormat;
        }
        format = format || this.local.dateFormat;
        settings = settings || {};
        var dayNamesShort = settings.dayNamesShort || this.local.dayNamesShort;
        var dayNames = settings.dayNames || this.local.dayNames;
        var monthNumbers = settings.monthNumbers || this.local.monthNumbers;
        var monthNamesShort = settings.monthNamesShort || this.local.monthNamesShort;
        var monthNames = settings.monthNames || this.local.monthNames;
        var calculateWeek = settings.calculateWeek || this.local.calculateWeek;
        // Check whether a format character is doubled
        var doubled = function(match, step) {
            var matches = 1;
            while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
                matches++;
            }
            iFormat += matches - 1;
            return Math.floor(matches / (step || 1)) > 1;
        };
        // Format a number, with leading zeroes if necessary
        var formatNumber = function(match, value, len, step) {
            var num = '' + value;
            if (doubled(match, step)) {
                while (num.length < len) {
                    num = '0' + num;
                }
            }
            return num;
        };
        // Format a name, short or long as requested
        var formatName = function(match, value, shortNames, longNames) {
            return (doubled(match) ? longNames[value] : shortNames[value]);
        };
        // Format month number
        // (e.g. Chinese calendar needs to account for intercalary months)
        var calendar = this;
        var formatMonth = function(date) {
            return (typeof monthNumbers === 'function') ?
                monthNumbers.call(calendar, date, doubled('m')) :
                localiseNumbers(formatNumber('m', date.month(), 2));
        };
        // Format a month name, short or long as requested
        var formatMonthName = function(date, useLongName) {
            if (useLongName) {
                return (typeof monthNames === 'function') ?
                    monthNames.call(calendar, date) :
                    monthNames[date.month() - calendar.minMonth];
            } else {
                return (typeof monthNamesShort === 'function') ?
                    monthNamesShort.call(calendar, date) :
                    monthNamesShort[date.month() - calendar.minMonth];
            }
        };
        // Localise numbers if requested and available
        var digits = this.local.digits;
        var localiseNumbers = function(value) {
            return (settings.localNumbers && digits ? digits(value) : value);
        };
        var output = '';
        var literal = false;
        for (var iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) === "'" && !doubled("'")) {
                    literal = false;
                }
                else {
                    output += format.charAt(iFormat);
                }
            }
            else {
                switch (format.charAt(iFormat)) {
                    case 'd': output += localiseNumbers(formatNumber('d', date.day(), 2)); break;
                    case 'D': output += formatName('D', date.dayOfWeek(),
                        dayNamesShort, dayNames); break;
                    case 'o': output += formatNumber('o', date.dayOfYear(), 3); break;
                    case 'w': output += formatNumber('w', date.weekOfYear(), 2); break;
                    case 'm': output += formatMonth(date); break;
                    case 'M': output += formatMonthName(date, doubled('M')); break;
                    case 'y':
                        output += (doubled('y', 2) ? date.year() :
                            (date.year() % 100 < 10 ? '0' : '') + date.year() % 100);
                        break;
                    case 'Y':
                        doubled('Y', 2);
                        output += date.formatYear();
                        break;
                    case 'J': output += date.toJD(); break;
                    case '@': output += (date.toJD() - this.UNIX_EPOCH) * this.SECS_PER_DAY; break;
                    case '!': output += (date.toJD() - this.TICKS_EPOCH) * this.TICKS_PER_DAY; break;
                    case "'":
                        if (doubled("'")) {
                            output += "'";
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default:
                        output += format.charAt(iFormat);
                }
            }
        }
        return output;
    },

    /** Parse a string value into a date object.
        See <a href="#formatDate"><code>formatDate</code></a> for the possible formats, plus:
        <ul>
        <li>* - ignore rest of string</li>
        </ul>
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar
        @param format {string} The expected format of the date ('' for default calendar format).
        @param value {string} The date in the above format.
        @param [settings] {object} Additional options whose attributes include:
        @property [shortYearCutoff] {number} The cutoff year for determining the century.
        @property [dayNamesShort] {string[]} Abbreviated names of the days from Sunday.
        @property [dayNames] {string[]} Names of the days from Sunday.
        @property [monthNamesShort] {string[]} Abbreviated names of the months.
        @property [monthNames] {string[]} Names of the months.
        @return {CDate} The extracted date value or <code>null</code> if value is blank.
        @throws Errors if the format and/or value are missing,
                if the value doesn't match the format, or if the date is invalid. */
    parseDate: function(format, value, settings) {
        if (value == null) {
            throw main.local.invalidArguments || main.regionalOptions[''].invalidArguments;
        }
        value = (typeof value === 'object' ? value.toString() : value + '');
        if (value === '') {
            return null;
        }
        format = format || this.local.dateFormat;
        settings = settings || {};
        var shortYearCutoff = settings.shortYearCutoff || this.shortYearCutoff;
        shortYearCutoff = (typeof shortYearCutoff !== 'string' ? shortYearCutoff :
            this.today().year() % 100 + parseInt(shortYearCutoff, 10));
        var dayNamesShort = settings.dayNamesShort || this.local.dayNamesShort;
        var dayNames = settings.dayNames || this.local.dayNames;
        var parseMonth = settings.parseMonth || this.local.parseMonth;
        var monthNumbers = settings.monthNumbers || this.local.monthNumbers;
        var monthNamesShort = settings.monthNamesShort || this.local.monthNamesShort;
        var monthNames = settings.monthNames || this.local.monthNames;
        var jd = -1;
        var year = -1;
        var month = -1;
        var day = -1;
        var doy = -1;
        var shortYear = false;
        var literal = false;
        // Check whether a format character is doubled
        var doubled = function(match, step) {
            var matches = 1;
            while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
                matches++;
            }
            iFormat += matches - 1;
            return Math.floor(matches / (step || 1)) > 1;
        };
        // Extract a number from the string value
        var getNumber = function(match, step) {
            var isDoubled = doubled(match, step);
            var size = [2, 3, isDoubled ? 4 : 2, isDoubled ? 4 : 2, 10, 11, 20]['oyYJ@!'.indexOf(match) + 1];
            var digits = new RegExp('^-?\\d{1,' + size + '}');
            var num = value.substring(iValue).match(digits);
            if (!num) {
                throw (main.local.missingNumberAt || main.regionalOptions[''].missingNumberAt).
                    replace(/\{0\}/, iValue);
            }
            iValue += num[0].length;
            return parseInt(num[0], 10);
        };
        // Extract a month number from the string value
        var calendar = this;
        var getMonthNumber = function() {
            if (typeof monthNumbers === 'function') {
                doubled('m');  // update iFormat
                var month = monthNumbers.call(calendar, value.substring(iValue));
                iValue += month.length;
                return month;
            }

            return getNumber('m');
        };
        // Extract a name from the string value and convert to an index
        var getName = function(match, shortNames, longNames, step) {
            var names = (doubled(match, step) ? longNames : shortNames);
            for (var i = 0; i < names.length; i++) {
                if (value.substr(iValue, names[i].length).toLowerCase() === names[i].toLowerCase()) {
                    iValue += names[i].length;
                    return i + calendar.minMonth;
                }
            }
            throw (main.local.unknownNameAt || main.regionalOptions[''].unknownNameAt).
                replace(/\{0\}/, iValue);
        };
        // Extract a month number from the string value
        var getMonthName = function() {
            if (typeof monthNames === 'function') {
                var month = doubled('M') ?
                    monthNames.call(calendar, value.substring(iValue)) :
                    monthNamesShort.call(calendar, value.substring(iValue));
                iValue += month.length;
                return month;
            }

            return getName('M', monthNamesShort, monthNames);
        };
        // Confirm that a literal character matches the string value
        var checkLiteral = function() {
            if (value.charAt(iValue) !== format.charAt(iFormat)) {
                throw (main.local.unexpectedLiteralAt ||
                    main.regionalOptions[''].unexpectedLiteralAt).replace(/\{0\}/, iValue);
            }
            iValue++;
        };
        var iValue = 0;
        for (var iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) === "'" && !doubled("'")) {
                    literal = false;
                }
                else {
                    checkLiteral();
                }
            }
            else {
                switch (format.charAt(iFormat)) {
                    case 'd': day = getNumber('d'); break;
                    case 'D': getName('D', dayNamesShort, dayNames); break;
                    case 'o': doy = getNumber('o'); break;
                    case 'w': getNumber('w'); break;
                    case 'm': month = getMonthNumber(); break;
                    case 'M': month = getMonthName(); break;
                    case 'y':
                        var iSave = iFormat;
                        shortYear = !doubled('y', 2);
                        iFormat = iSave;
                        year = getNumber('y', 2);
                        break;
                    case 'Y': year = getNumber('Y', 2); break;
                    case 'J':
                        jd = getNumber('J') + 0.5;
                        if (value.charAt(iValue) === '.') {
                            iValue++;
                            getNumber('J');
                        }
                        break;
                    case '@': jd = getNumber('@') / this.SECS_PER_DAY + this.UNIX_EPOCH; break;
                    case '!': jd = getNumber('!') / this.TICKS_PER_DAY + this.TICKS_EPOCH; break;
                    case '*': iValue = value.length; break;
                    case "'":
                        if (doubled("'")) {
                            checkLiteral();
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default: checkLiteral();
                }
            }
        }
        if (iValue < value.length) {
            throw main.local.unexpectedText || main.regionalOptions[''].unexpectedText;
        }
        if (year === -1) {
            year = this.today().year();
        }
        else if (year < 100 && shortYear) {
            year += (shortYearCutoff === -1 ? 1900 : this.today().year() -
                this.today().year() % 100 - (year <= shortYearCutoff ? 0 : 100));
        }
        if (typeof month === 'string') {
            month = parseMonth.call(this, year, month);
        }
        if (doy > -1) {
            month = 1;
            day = doy;
            for (var dim = this.daysInMonth(year, month); day > dim; dim = this.daysInMonth(year, month)) {
                month++;
                day -= dim;
            }
        }
        return (jd > -1 ? this.fromJD(jd) : this.newDate(year, month, day));
    },

    /** A date may be specified as an exact value or a relative one.
        Found in the <code>jquery.calendars.plus.js</code> module.
        @memberof BaseCalendar
        @param dateSpec {CDate|number|string} The date as an object or string in the given format or
                an offset - numeric days from today, or string amounts and periods, e.g. '+1m +2w'.
        @param defaultDate {CDate} The date to use if no other supplied, may be <code>null</code>.
        @param currentDate {CDate} The current date as a possible basis for relative dates,
                if <code>null</code> today is used (optional)
        @param [dateFormat] {string} The expected date format - see <a href="#formatDate"><code>formatDate</code></a>.
        @param [settings] {object} Additional options whose attributes include:
        @property [shortYearCutoff] {number} The cutoff year for determining the century.
        @property [dayNamesShort] {string[]} Abbreviated names of the days from Sunday.
        @property [dayNames] {string[]} Names of the days from Sunday.
        @property [monthNamesShort] {string[]} Abbreviated names of the months.
        @property [monthNames] {string[]} Names of the months.
        @return {CDate} The decoded date. */
    determineDate: function(dateSpec, defaultDate, currentDate, dateFormat, settings) {
        if (currentDate && typeof currentDate !== 'object') {
            settings = dateFormat;
            dateFormat = currentDate;
            currentDate = null;
        }
        if (typeof dateFormat !== 'string') {
            settings = dateFormat;
            dateFormat = '';
        }
        var calendar = this;
        var offsetString = function(offset) {
            try {
                return calendar.parseDate(dateFormat, offset, settings);
            }
            catch (e) {
                // Ignore
            }
            offset = offset.toLowerCase();
            var date = (offset.match(/^c/) && currentDate ?
                currentDate.newDate() : null) || calendar.today();
            var pattern = /([+-]?[0-9]+)\s*(d|w|m|y)?/g;
            var matches = pattern.exec(offset);
            while (matches) {
                date.add(parseInt(matches[1], 10), matches[2] || 'd');
                matches = pattern.exec(offset);
            }
            return date;
        };
        defaultDate = (defaultDate ? defaultDate.newDate() : null);
        dateSpec = (dateSpec == null ? defaultDate :
            (typeof dateSpec === 'string' ? offsetString(dateSpec) : (typeof dateSpec === 'number' ?
            (isNaN(dateSpec) || dateSpec === Infinity || dateSpec === -Infinity ? defaultDate :
            calendar.today().add(dateSpec, 'd')) : calendar.newDate(dateSpec))));
        return dateSpec;
    }
});

