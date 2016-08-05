"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var APP_DATETIME = (function () {
    function APP_DATETIME() {
    }
    Object.defineProperty(APP_DATETIME, "TODAY", {
        get: function () { return new Date().toISOString().substr(0, 10); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APP_DATETIME, "TIME", {
        get: function () { return new Date().toISOString().substr(14, 22); },
        enumerable: true,
        configurable: true
    });
    APP_DATETIME = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], APP_DATETIME);
    return APP_DATETIME;
}());
exports.APP_DATETIME = APP_DATETIME;
function convertArrayOfObjectsToCSV(args) {
    var result, counter, keys, columnDelimiter, lineDelimiter, data;
    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }
    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';
    keys = Object.keys(data[0]);
    result = '';
    result += (args.headers) ? args.headers.join(columnDelimiter) : keys.join(columnDelimiter);
    result += lineDelimiter;
    data.forEach(function (item) {
        counter = 0;
        keys.forEach(function (key) {
            if (counter > 0)
                result += columnDelimiter;
            if (item[key] == null) {
                result += '';
            }
            else if (typeof item[key] === 'string' && item[key].includes(",")) {
                result += '"' + item[key] + '"';
            }
            else {
                result += item[key];
            }
            counter++;
        });
        result += lineDelimiter;
    });
    return result;
}
exports.convertArrayOfObjectsToCSV = convertArrayOfObjectsToCSV;
function downloadCSV(args) {
    var data, filename, link;
    var csv = this.convertArrayOfObjectsToCSV({
        data: args.data,
        headers: args.headers
    });
    if (csv == null)
        return;
    filename = args.filename || 'export.csv';
    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);
    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}
exports.downloadCSV = downloadCSV;
// the following function found here: http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript/4760279#4760279
function dynamicSortMultiple() {
    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while (result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    };
}
exports.dynamicSortMultiple = dynamicSortMultiple;
//# sourceMappingURL=app.utilities.js.map