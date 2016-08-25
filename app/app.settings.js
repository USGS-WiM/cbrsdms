System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var APP_SETTINGS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            APP_SETTINGS = (function () {
                function APP_SETTINGS() {
                }
                Object.defineProperty(APP_SETTINGS, "AUTH_URL", {
                    get: function () { return this._API_ENDPOINT + 'auth/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "CASES_URL", {
                    get: function () { return this._API_ENDPOINT + 'cases/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "PROPERTIES_URL", {
                    get: function () { return this._API_ENDPOINT + 'properties/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "REQUESTERS_URL", {
                    get: function () { return this._API_ENDPOINT + 'requesters/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "CASEFILES_URL", {
                    get: function () { return this._API_ENDPOINT + 'casefiles/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "COMMENTS_URL", {
                    get: function () { return this._API_ENDPOINT + 'comments/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "TAGS_URL", {
                    get: function () { return this._API_ENDPOINT + 'tags/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "CASETAGS_URL", {
                    get: function () { return this._API_ENDPOINT + 'casetags/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "SYSTEMUNITS_URL", {
                    get: function () { return this._API_ENDPOINT + 'systemunits/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "FIELDOFFICES_URL", {
                    get: function () { return this._API_ENDPOINT + 'fieldoffices/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "SYSTEMMAPS_URL", {
                    get: function () { return this._API_ENDPOINT + 'systemmaps/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "USERS_URL", {
                    get: function () { return this._API_ENDPOINT + 'users/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "DETERMINATIONS_URL", {
                    get: function () { return this._API_ENDPOINT + 'determinations/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "SYSTEMUNITPROHIBITIONDATES_URL", {
                    get: function () { return this._API_ENDPOINT + 'systemunitprohibitiondates/'; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "MIN_JSON_HEADERS", {
                    get: function () { return new http_1.Headers({ 'Accept': 'application/json' }); },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "JSON_HEADERS", {
                    get: function () { return new http_1.Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }); },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "AUTH_HEADERS", {
                    get: function () { return new http_1.Headers({ 'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) }); },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "MIN_AUTH_JSON_HEADERS", {
                    get: function () {
                        return new http_1.Headers({
                            'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')),
                            'Accept': 'application/json' });
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "AUTH_JSON_HEADERS", {
                    get: function () {
                        return new http_1.Headers({
                            'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')),
                            'Accept': 'application/json', 'Content-Type': 'application/json' });
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "STATUSES", {
                    get: function () { return ["Closed with no Final Letter", "Final", "Awaiting Final Letter", "Awaiting FWS Review", "Awaiting QC", "Received"]; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(APP_SETTINGS, "SALUTATIONS", {
                    get: function () { return ["Mr.", "Ms.", "Dr."]; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "US_STATES", {
                    get: function () { return ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "CONTENT_TYPES", {
                    get: function () { return ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf", "text/plain", "image/jpeg", "image/png", "image/gif", "image/tiff", "image/bmp", "application/zip", "application/x-bzip", "application/x-bzip2"]; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(APP_SETTINGS, "MAX_UPLOAD_SIZE", {
                    get: function () { return 2621440; },
                    enumerable: true,
                    configurable: true
                });
                ;
                //private static _API_ENDPOINT: string = 'http://localhost:8000/cbraservices/';
                APP_SETTINGS._API_ENDPOINT = 'http://' + window.location.hostname + ':8000/cbraservices/';
                APP_SETTINGS = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], APP_SETTINGS);
                return APP_SETTINGS;
            }());
            exports_1("APP_SETTINGS", APP_SETTINGS);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUE7Z0JBcUNBLENBQUM7Z0JBakNHLHNCQUFrQix3QkFBUTt5QkFBMUIsY0FBdUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQzs7O21CQUFBOztnQkFDMUUsc0JBQWtCLHlCQUFTO3lCQUEzQixjQUF3QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDOzs7bUJBQUE7O2dCQUM1RSxzQkFBa0IsOEJBQWM7eUJBQWhDLGNBQTZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFDLGFBQWEsQ0FBQSxDQUFDLENBQUM7OzttQkFBQTs7Z0JBQ3RGLHNCQUFrQiw4QkFBYzt5QkFBaEMsY0FBNkMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsYUFBYSxDQUFBLENBQUMsQ0FBQzs7O21CQUFBOztnQkFDdEYsc0JBQWtCLDZCQUFhO3lCQUEvQixjQUE0QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxZQUFZLENBQUEsQ0FBQyxDQUFDOzs7bUJBQUE7O2dCQUNwRixzQkFBa0IsNEJBQVk7eUJBQTlCLGNBQTJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFDLFdBQVcsQ0FBQSxDQUFDLENBQUM7OzttQkFBQTs7Z0JBQ2xGLHNCQUFrQix3QkFBUTt5QkFBMUIsY0FBdUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQzs7O21CQUFBOztnQkFDMUUsc0JBQWtCLDRCQUFZO3lCQUE5QixjQUEyQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxXQUFXLENBQUEsQ0FBQyxDQUFDOzs7bUJBQUE7O2dCQUNsRixzQkFB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LEVBQUU7O2dDQUFBO2dCQXNDYixtQkFBQztZQUFELENBQUMsQUFyQ0QsSUFxQ0M7WUFyQ0QsdUNBcUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFQUF9TRVRUSU5HUyB7XHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIF9BUElfRU5EUE9JTlQ6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvY2JyYXNlcnZpY2VzLyc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQVBJX0VORFBPSU5UOiBzdHJpbmcgPSAnaHR0cDovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjgwMDAvY2JyYXNlcnZpY2VzLyc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgQVVUSF9VUkwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX0FQSV9FTkRQT0lOVCsnYXV0aC8nIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBDQVNFU19VUkwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX0FQSV9FTkRQT0lOVCsnY2FzZXMvJyB9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPUEVSVElFU19VUkwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX0FQSV9FTkRQT0lOVCsncHJvcGVydGllcy8nIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBSRVFVRVNURVJTX1VSTCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fQVBJX0VORFBPSU5UKydyZXF1ZXN0ZXJzLycgfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENBU0VGSUxFU19VUkwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX0FQSV9FTkRQT0lOVCsnY2FzZWZpbGVzLycgfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENPTU1FTlRTX1VSTCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fQVBJX0VORFBPSU5UKydjb21tZW50cy8nIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBUQUdTX1VSTCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fQVBJX0VORFBPSU5UKyd0YWdzLycgfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENBU0VUQUdTX1VSTCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fQVBJX0VORFBPSU5UKydjYXNldGFncy8nIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTWVNURU1VTklUU19VUkwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX0FQSV9FTkRQT0lOVCsnc3lzdGVtdW5pdHMvJyB9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRklFTERPRkZJQ0VTX1VSTCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fQVBJX0VORFBPSU5UKydmaWVsZG9mZmljZXMvJyB9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU1lTVEVNTUFQU19VUkwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX0FQSV9FTkRQT0lOVCsnc3lzdGVtbWFwcy8nIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBVU0VSU19VUkwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX0FQSV9FTkRQT0lOVCsndXNlcnMvJyB9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgREVURVJNSU5BVElPTlNfVVJMKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9BUElfRU5EUE9JTlQrJ2RldGVybWluYXRpb25zLycgfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNZU1RFTVVOSVRQUk9ISUJJVElPTkRBVEVTX1VSTCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fQVBJX0VORFBPSU5UKydzeXN0ZW11bml0cHJvaGliaXRpb25kYXRlcy8nIH07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgTUlOX0pTT05fSEVBREVSUygpIHsgcmV0dXJuIG5ldyBIZWFkZXJzKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSB9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSlNPTl9IRUFERVJTKCkgeyByZXR1cm4gbmV3IEhlYWRlcnMoeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBBVVRIX0hFQURFUlMoKSB7IHJldHVybiBuZXcgSGVhZGVycyh7ICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyBidG9hKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgKyAnOicgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpKX0pIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBNSU5fQVVUSF9KU09OX0hFQURFUlMoKSB7IHJldHVybiBuZXcgSGVhZGVycyh7XHJcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJ0b2Eoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSArICc6JyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJykpLFxyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgKX07XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBBVVRIX0pTT05fSEVBREVSUygpIHsgcmV0dXJuIG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyAnICsgYnRvYShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpICsgJzonICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKSksXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICApfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTVEFUVVNFUygpOiBzdHJpbmdbXSB7IHJldHVybiBbXCJDbG9zZWQgd2l0aCBubyBGaW5hbCBMZXR0ZXJcIiwgXCJGaW5hbFwiLCBcIkF3YWl0aW5nIEZpbmFsIExldHRlclwiLCBcIkF3YWl0aW5nIEZXUyBSZXZpZXdcIiwgXCJBd2FpdGluZyBRQ1wiLCBcIlJlY2VpdmVkXCJdIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFNBTFVUQVRJT05TKCk6IHN0cmluZ1tdIHsgcmV0dXJuIFtcIk1yLlwiLCBcIk1zLlwiLCBcIkRyLlwiXSB9O1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgVVNfU1RBVEVTKCk6IHN0cmluZ1tdIHsgcmV0dXJuIFtcIkFMXCIsXCJBS1wiLFwiQVpcIixcIkFSXCIsXCJDQVwiLFwiQ09cIixcIkNUXCIsXCJERVwiLFwiRENcIixcIkZMXCIsXCJHQVwiLFwiSElcIixcIklEXCIsXCJJTFwiLFwiSU5cIixcIklBXCIsXCJLU1wiLFwiS1lcIixcIkxBXCIsXCJNRVwiLFwiTURcIixcIk1BXCIsXCJNSVwiLFwiTU5cIixcIk1TXCIsXCJNT1wiLFwiTVRcIixcIk5FXCIsXCJOVlwiLFwiTkhcIixcIk5KXCIsXCJOTVwiLFwiTllcIixcIk5DXCIsXCJORFwiLFwiT0hcIixcIk9LXCIsXCJPUlwiLFwiUEFcIixcIlJJXCIsXCJTQ1wiLFwiU0RcIixcIlROXCIsXCJUWFwiLFwiVVRcIixcIlZUXCIsXCJWQVwiLFwiV0FcIixcIldWXCIsXCJXSVwiLFwiV1lcIl0gfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IENPTlRFTlRfVFlQRVMoKTogc3RyaW5nW10geyByZXR1cm4gW1wiYXBwbGljYXRpb24vbXN3b3JkXCIsIFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnRcIixcImFwcGxpY2F0aW9uL3BkZlwiLCBcInRleHQvcGxhaW5cIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvZ2lmXCIsIFwiaW1hZ2UvdGlmZlwiLCBcImltYWdlL2JtcFwiLCBcImFwcGxpY2F0aW9uL3ppcFwiLCBcImFwcGxpY2F0aW9uL3gtYnppcFwiLCBcImFwcGxpY2F0aW9uL3gtYnppcDJcIl0gfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE1BWF9VUExPQURfU0laRSgpOiBudW1iZXIgeyByZXR1cm4gMjYyMTQ0MCB9O1xyXG5cclxufSJdfQ==