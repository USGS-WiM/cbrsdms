System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Fieldoffice;
    return {
        setters:[],
        execute: function() {
            Fieldoffice = (function () {
                function Fieldoffice(field_office_number, field_office_name, field_agent_name, field_agent_email, city, state, id) {
                    this.field_office_number = field_office_number;
                    this.field_office_name = field_office_name;
                    this.field_agent_name = field_agent_name;
                    this.field_agent_email = field_agent_email;
                    this.city = city;
                    this.state = state;
                    this.id = id;
                }
                return Fieldoffice;
            }());
            exports_1("Fieldoffice", Fieldoffice);
        }
    }
});
//# sourceMappingURL=fieldoffice.js.map