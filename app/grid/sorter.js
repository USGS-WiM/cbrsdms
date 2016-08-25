System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sorter;
    return {
        setters:[],
        execute: function() {
            Sorter = (function () {
                function Sorter() {
                    this.direction = 1;
                }
                Sorter.prototype.sort = function (key, data) {
                    var _this = this;
                    if (this.key === key) {
                        this.direction = -this.direction;
                    }
                    else {
                        this.direction = 1;
                    }
                    this.key = key;
                    data.sort(function (a, b) {
                        if (a[key] === b[key]) {
                            return 0;
                        }
                        else if (a[key] > b[key]) {
                            return _this.direction;
                        }
                        else {
                            return -_this.direction;
                        }
                    });
                };
                return Sorter;
            }());
            exports_1("Sorter", Sorter);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFLSTtvQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxxQkFBSSxHQUFKLFVBQUssR0FBVSxFQUFDLElBQVU7b0JBQTFCLGlCQXNCQztvQkFwQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDO3dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDckMsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQztvQkFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFFZixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUM7d0JBQ1YsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ2xCLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ3JCLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDO3dCQUMxQixDQUFDO3dCQUNELElBQUksQ0FBQSxDQUFDOzRCQUNELE1BQU0sQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUM7d0JBQzNCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFTCxhQUFDO1lBQUQsQ0FBQyxBQWpDRCxJQWlDQztZQWpDRCwyQkFpQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTb3J0ZXJ7XHJcblxyXG4gICAgZGlyZWN0aW9uOm51bWJlcjtcclxuICAgIGtleTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydChrZXk6c3RyaW5nLGRhdGE6YW55W10pe1xyXG5cclxuICAgICAgICBpZih0aGlzLmtleSA9PT0ga2V5KXtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG5cclxuICAgICAgICBkYXRhLnNvcnQoKGEsYikgPT4ge1xyXG4gICAgICAgICAgICBpZihhW2tleV0gPT09IGJba2V5XSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGFba2V5XSA+IGJba2V5XSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=