System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Systemunit;
    return {
        setters:[],
        execute: function() {
            Systemunit = (function () {
                function Systemunit(system_unit_number, system_unit_name, field_office, id) {
                    this.system_unit_number = system_unit_number;
                    this.system_unit_name = system_unit_name;
                    this.field_office = field_office;
                    this.id = id;
                }
                return Systemunit;
            }());
            exports_1("Systemunit", Systemunit);
        }
    }
});
//# sourceMappingURL=systemunit.js.map