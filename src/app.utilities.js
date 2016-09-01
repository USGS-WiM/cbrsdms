System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var APP_DATETIME;
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
    exports_1("convertArrayOfObjectsToCSV", convertArrayOfObjectsToCSV);
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
    exports_1("downloadCSV", downloadCSV);
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
    exports_1("dynamicSortMultiple", dynamicSortMultiple);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            APP_DATETIME = (function () {
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
            exports_1("APP_DATETIME", APP_DATETIME);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnV0aWxpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC51dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFRQSxvQ0FBMkMsSUFBUztRQUNoRCxJQUFJLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBRWhFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksR0FBRyxDQUFDO1FBQzlDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQztRQUUzQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QixNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0YsTUFBTSxJQUFJLGFBQWEsQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtZQUN2QixPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUc7Z0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7b0JBQUMsTUFBTSxJQUFJLGVBQWUsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQUEsTUFBTSxJQUFJLEVBQUUsQ0FBQztnQkFBQSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFBLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFBQSxDQUFDO2dCQUNyRyxJQUFJLENBQUMsQ0FBQztvQkFBQSxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUFBLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLElBQUksYUFBYSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBOUJELG1FQThCQyxDQUFBO0lBRUQscUJBQTRCLElBQVM7UUFDakMsSUFBSSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztRQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUM7WUFDdEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUM7UUFFeEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDO1FBRXpDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxHQUFHLEdBQUcsOEJBQThCLEdBQUcsR0FBRyxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBbkJELHFDQW1CQyxDQUFBO0lBRUQsNkpBQTZKO0lBQzdKO1FBQ1EscUJBQXFCLFFBQVE7WUFDekIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQztZQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDO2dCQUNoQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRixNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUM5QixDQUFDLENBQUE7UUFDTCxDQUFDO1FBQ0Q7Ozs7V0FJRztRQUNILElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN0QixNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSTtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3pEOztlQUVHO1lBQ0gsT0FBTSxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMzQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxFQUFFLENBQUM7WUFDUixDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUE7SUFDTCxDQUFDO0lBN0JMLHFEQTZCSyxDQUFBOzs7Ozs7O1lBeEZMO2dCQUFBO2dCQUdBLENBQUM7Z0JBRkcsc0JBQWtCLHFCQUFLO3lCQUF2QixjQUFtQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQzs7O21CQUFBO2dCQUNsRixzQkFBa0Isb0JBQUk7eUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDOzs7bUJBQUE7Z0JBSHRGO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQUliLG1CQUFDO1lBQUQsQ0FBQyxBQUhELElBR0M7WUFIRCx1Q0FHQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBUFBfREFURVRJTUUge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgVE9EQVkoKTogc3RyaW5nIHtyZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCk7fVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgVElNRSgpOiBzdHJpbmcge3JldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDE0LCAyMik7fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEFycmF5T2ZPYmplY3RzVG9DU1YoYXJnczogYW55KSB7XHJcbiAgICBsZXQgcmVzdWx0LCBjb3VudGVyLCBrZXlzLCBjb2x1bW5EZWxpbWl0ZXIsIGxpbmVEZWxpbWl0ZXIsIGRhdGE7XHJcblxyXG4gICAgZGF0YSA9IGFyZ3MuZGF0YSB8fCBudWxsO1xyXG4gICAgaWYgKGRhdGEgPT0gbnVsbCB8fCAhZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5EZWxpbWl0ZXIgPSBhcmdzLmNvbHVtbkRlbGltaXRlciB8fCAnLCc7XHJcbiAgICBsaW5lRGVsaW1pdGVyID0gYXJncy5saW5lRGVsaW1pdGVyIHx8ICdcXG4nO1xyXG5cclxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcclxuXHJcbiAgICByZXN1bHQgPSAnJztcclxuICAgIHJlc3VsdCArPSAoYXJncy5oZWFkZXJzKSA/IGFyZ3MuaGVhZGVycy5qb2luKGNvbHVtbkRlbGltaXRlcikgOiBrZXlzLmpvaW4oY29sdW1uRGVsaW1pdGVyKTtcclxuICAgIHJlc3VsdCArPSBsaW5lRGVsaW1pdGVyO1xyXG5cclxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyID4gMCkgcmVzdWx0ICs9IGNvbHVtbkRlbGltaXRlcjtcclxuICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSA9PSBudWxsKSB7cmVzdWx0ICs9ICcnO31cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGl0ZW1ba2V5XSA9PT0gJ3N0cmluZycgJiYgaXRlbVtrZXldLmluY2x1ZGVzKFwiLFwiKSkge3Jlc3VsdCArPSAnXCInICsgaXRlbVtrZXldICsgJ1wiJzt9XHJcbiAgICAgICAgICAgIGVsc2Uge3Jlc3VsdCArPSBpdGVtW2tleV07fVxyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0ICs9IGxpbmVEZWxpbWl0ZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRDU1YoYXJnczogYW55KSB7XHJcbiAgICBsZXQgZGF0YSwgZmlsZW5hbWUsIGxpbms7XHJcbiAgICBsZXQgY3N2ID0gdGhpcy5jb252ZXJ0QXJyYXlPZk9iamVjdHNUb0NTVih7XHJcbiAgICAgICAgZGF0YTogYXJncy5kYXRhLFxyXG4gICAgICAgIGhlYWRlcnM6IGFyZ3MuaGVhZGVyc1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY3N2ID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBmaWxlbmFtZSA9IGFyZ3MuZmlsZW5hbWUgfHwgJ2V4cG9ydC5jc3YnO1xyXG5cclxuICAgIGlmICghY3N2Lm1hdGNoKC9eZGF0YTp0ZXh0XFwvY3N2L2kpKSB7XHJcbiAgICAgICAgY3N2ID0gJ2RhdGE6dGV4dC9jc3Y7Y2hhcnNldD11dGYtOCwnICsgY3N2O1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IGVuY29kZVVSSShjc3YpO1xyXG5cclxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGRhdGEpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZW5hbWUpO1xyXG4gICAgbGluay5jbGljaygpO1xyXG59XHJcblxyXG4vLyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uIGZvdW5kIGhlcmU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTEyOTIxNi9zb3J0LWFycmF5LW9mLW9iamVjdHMtYnktc3RyaW5nLXByb3BlcnR5LXZhbHVlLWluLWphdmFzY3JpcHQvNDc2MDI3OSM0NzYwMjc5XHJcbmV4cG9ydCBmdW5jdGlvbiBkeW5hbWljU29ydE11bHRpcGxlKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGR5bmFtaWNTb3J0KHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIGxldCBzb3J0T3JkZXIgPSAxO1xyXG4gICAgICAgICAgICBpZihwcm9wZXJ0eVswXSA9PT0gXCItXCIpIHtcclxuICAgICAgICAgICAgICAgIHNvcnRPcmRlciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLGIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoYVtwcm9wZXJ0eV0gPCBiW3Byb3BlcnR5XSkgPyAtMSA6IChhW3Byb3BlcnR5XSA+IGJbcHJvcGVydHldKSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIHNvcnRPcmRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIHNhdmUgdGhlIGFyZ3VtZW50cyBvYmplY3QgYXMgaXQgd2lsbCBiZSBvdmVyd3JpdHRlblxyXG4gICAgICAgICAqIG5vdGUgdGhhdCBhcmd1bWVudHMgb2JqZWN0IGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0XHJcbiAgICAgICAgICogY29uc2lzdGluZyBvZiB0aGUgbmFtZXMgb2YgdGhlIHByb3BlcnRpZXMgdG8gc29ydCBieVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBwcm9wcyA9IGFyZ3VtZW50cztcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iajEsIG9iajIpIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwLCByZXN1bHQgPSAwLCBudW1iZXJPZlByb3BlcnRpZXMgPSBwcm9wcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8qIHRyeSBnZXR0aW5nIGEgZGlmZmVyZW50IHJlc3VsdCBmcm9tIDAgKGVxdWFsKVxyXG4gICAgICAgICAgICAgKiBhcyBsb25nIGFzIHdlIGhhdmUgZXh0cmEgcHJvcGVydGllcyB0byBjb21wYXJlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB3aGlsZShyZXN1bHQgPT09IDAgJiYgaSA8IG51bWJlck9mUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZHluYW1pY1NvcnQocHJvcHNbaV0pKG9iajEsIG9iajIpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==