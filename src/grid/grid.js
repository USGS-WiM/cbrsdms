System.register(['@angular/core', './sorter'], function(exports_1, context_1) {
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
    var core_1, sorter_1;
    var Grid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sorter_1_1) {
                sorter_1 = sorter_1_1;
            }],
        execute: function() {
            Grid = (function () {
                function Grid() {
                    this.sorter = new sorter_1.Sorter();
                }
                Grid.prototype.sort = function (key) {
                    this.sorter.sort(key, this.rows);
                };
                Grid = __decorate([
                    core_1.Component({
                        selector: 'grid',
                        inputs: ['rows: rows', 'columns: columns'],
                        templateUrl: 'app/grid/grid.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Grid);
                return Grid;
            }());
            exports_1("Grid", Grid);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFJSTtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsbUJBQUksR0FBSixVQUFLLEdBQUc7b0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFmTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUMsa0JBQWtCLENBQUM7d0JBQ3pDLFdBQVcsRUFBRSxvQkFBb0I7cUJBQ3BDLENBQUM7O3dCQUFBO2dCQVlGLFdBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELHVCQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29sdW1ufSBmcm9tICcuL2NvbHVtbic7XHJcbmltcG9ydCB7U29ydGVyfSBmcm9tICcuL3NvcnRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZCcsXHJcbiAgICBpbnB1dHM6IFsncm93czogcm93cycsJ2NvbHVtbnM6IGNvbHVtbnMnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2dyaWQvZ3JpZC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZHtcclxuICAgIGNvbHVtbnM6QXJyYXk8Q29sdW1uPjtcclxuICAgIHJvd3M6QXJyYXk8YW55PjtcclxuICAgIHNvcnRlcjogU29ydGVyO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNvcnRlciA9IG5ldyBTb3J0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0KGtleSl7XHJcbiAgICAgICAgdGhpcy5zb3J0ZXIuc29ydChrZXksIHRoaXMucm93cyk7XHJcbiAgICB9XHJcbn0iXX0=