System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Systemmap;
    return {
        setters:[],
        execute: function() {
            Systemmap = (function () {
                function Systemmap(map_number, map_title, map_date, system_unit, id) {
                    this.map_number = map_number;
                    this.map_title = map_title;
                    this.map_date = map_date;
                    this.system_unit = system_unit;
                    this.id = id;
                }
                return Systemmap;
            }());
            exports_1("Systemmap", Systemmap);
        }
    }
});
//# sourceMappingURL=systemmap.js.map