"use strict";
var Property = (function () {
    function Property(street, city, state, zipcode, unit, subdivision, policy_number, id) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.unit = unit;
        this.subdivision = subdivision;
        this.policy_number = policy_number;
        this.id = id;
    }
    return Property;
}());
exports.Property = Property;
//# sourceMappingURL=property.js.map