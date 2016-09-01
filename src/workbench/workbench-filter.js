System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WorkbenchFilter;
    return {
        setters:[],
        execute: function() {
            WorkbenchFilter = (function () {
                function WorkbenchFilter(status, case_number, request_date_after, request_date_before, distance_from, distance_to, analyst, qc_reviewer, cbrs_unit, tags, street, city, priority, on_hold, invalid, id) {
                    this.status = status;
                    this.case_number = case_number;
                    this.request_date_after = request_date_after;
                    this.request_date_before = request_date_before;
                    this.distance_from = distance_from;
                    this.distance_to = distance_to;
                    this.analyst = analyst;
                    this.qc_reviewer = qc_reviewer;
                    this.cbrs_unit = cbrs_unit;
                    this.tags = tags;
                    this.street = street;
                    this.city = city;
                    this.priority = priority;
                    this.on_hold = on_hold;
                    this.invalid = invalid;
                    this.id = id;
                }
                return WorkbenchFilter;
            }());
            exports_1("WorkbenchFilter", WorkbenchFilter);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtiZW5jaC1maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUNJLHlCQUNXLE1BQWUsRUFDZixXQUFvQixFQUNwQixrQkFBeUIsRUFDekIsbUJBQTBCLEVBQzFCLGFBQXNCLEVBQ3RCLFdBQW9CLEVBQ3BCLE9BQWdCLEVBQ2hCLFdBQW9CLEVBQ3BCLFNBQWtCLEVBQ2xCLElBQWUsRUFDZixNQUFlLEVBQ2YsSUFBYSxFQUNiLFFBQWtCLEVBQ2xCLE9BQWlCLEVBQ2pCLE9BQWlCLEVBQ2pCLEVBQVc7b0JBZlgsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBUztvQkFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFPO29CQUN6Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQU87b0JBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFTO29CQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBUztvQkFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7b0JBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQ2xCLFNBQUksR0FBSixJQUFJLENBQVc7b0JBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUztvQkFDZixTQUFJLEdBQUosSUFBSSxDQUFTO29CQUNiLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVU7b0JBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVU7b0JBQ2pCLE9BQUUsR0FBRixFQUFFLENBQVM7Z0JBQ25CLENBQUM7Z0JBQ1Isc0JBQUM7WUFBRCxDQUFDLEFBbkJELElBbUJDO1lBbkJELDZDQW1CQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdvcmtiZW5jaEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgc3RhdHVzPzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBjYXNlX251bWJlcj86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVxdWVzdF9kYXRlX2FmdGVyPzogRGF0ZSxcclxuICAgICAgICBwdWJsaWMgcmVxdWVzdF9kYXRlX2JlZm9yZT86IERhdGUsXHJcbiAgICAgICAgcHVibGljIGRpc3RhbmNlX2Zyb20/OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGRpc3RhbmNlX3RvPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBhbmFseXN0PzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBxY19yZXZpZXdlcj86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgY2Jyc191bml0PzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB0YWdzPzogbnVtYmVyW10sXHJcbiAgICAgICAgcHVibGljIHN0cmVldD86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgY2l0eT86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcHJpb3JpdHk/OiBCb29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBvbl9ob2xkPzogQm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgaW52YWxpZD86IEJvb2xlYW4sXHJcbiAgICAgICAgcHVibGljIGlkPzogbnVtYmVyXHJcbiAgICApIHt9XHJcbn0iXX0=