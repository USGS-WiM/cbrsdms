"use strict";
var WorkbenchFilter = (function () {
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
exports.WorkbenchFilter = WorkbenchFilter;
//# sourceMappingURL=workbench-filter.js.map