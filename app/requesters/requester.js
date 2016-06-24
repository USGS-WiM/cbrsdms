"use strict";
var Requester = (function () {
    function Requester(first_name, last_name, salutation, organization, email, street, unit, city, state, zipcode, id) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.salutation = salutation;
        this.organization = organization;
        this.email = email;
        this.street = street;
        this.unit = unit;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.id = id;
    }
    return Requester;
}());
exports.Requester = Requester;
//# sourceMappingURL=requester.js.map