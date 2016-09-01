System.register(['@angular/core', './grid', './column'], function(exports_1, context_1) {
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
    var core_1, grid_1, column_1;
    var GridDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            }],
        execute: function() {
            GridDemo = (function () {
                function GridDemo() {
                }
                GridDemo.prototype.getPeople = function () {
                    return [
                        { firstName: 'Joe', lastName: 'Jackson', age: 20 },
                        { firstName: 'Peter', lastName: 'Smith', age: 30 },
                        { firstName: 'Jane', lastName: 'Doe', age: 50 },
                        { firstName: 'Tim', lastName: 'Smith', age: 80 }
                    ];
                };
                GridDemo.prototype.getColumns = function () {
                    return [
                        new column_1.Column('firstName', 'First Name'),
                        new column_1.Column('lastName', 'Last Name'),
                        new column_1.Column('age', 'Age')
                    ];
                };
                GridDemo.prototype.ngOnInit = function () {
                    this.people = this.getPeople();
                    this.columns = this.getColumns();
                };
                GridDemo = __decorate([
                    core_1.Component({
                        selector: 'my-grid',
                        directives: [grid_1.Grid],
                        template: "<h3>Hello World! Here is a grid!</h3>\n    <grid name=\"person grid\" [rows]=\"people\" [columns]=\"columns\"></grid>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridDemo);
                return GridDemo;
            }());
            exports_1("GridDemo", GridDemo);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1kZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JpZC1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBS0k7Z0JBR0EsQ0FBQztnQkFFRCw0QkFBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQzt3QkFDSCxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDO3dCQUMzQyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDO3dCQUMzQyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDO3dCQUN4QyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDO3FCQUM1QyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsNkJBQVUsR0FBVjtvQkFDSSxNQUFNLENBQUM7d0JBQ0gsSUFBSSxlQUFNLENBQUMsV0FBVyxFQUFDLFlBQVksQ0FBQzt3QkFDcEMsSUFBSSxlQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQzt3QkFDbEMsSUFBSSxlQUFNLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQztxQkFDMUIsQ0FBQztnQkFDTixDQUFDO2dCQUVELDJCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNyQyxDQUFDO2dCQXJDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixVQUFVLEVBQUUsQ0FBQyxXQUFJLENBQUM7d0JBQ2xCLFFBQVEsRUFBRSx1SEFDMkQ7cUJBQ3hFLENBQUM7OzRCQUFBO2dCQWlDRixlQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCwrQkErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0dyaWR9IGZyb20gJy4vZ3JpZCc7XHJcbmltcG9ydCB7Q29sdW1ufSBmcm9tICcuL2NvbHVtbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktZ3JpZCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbR3JpZF0sXHJcbiAgICB0ZW1wbGF0ZTogYDxoMz5IZWxsbyBXb3JsZCEgSGVyZSBpcyBhIGdyaWQhPC9oMz5cclxuICAgIDxncmlkIG5hbWU9XCJwZXJzb24gZ3JpZFwiIFtyb3dzXT1cInBlb3BsZVwiIFtjb2x1bW5zXT1cImNvbHVtbnNcIj48L2dyaWQ+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWREZW1vIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwZW9wbGU6IEFycmF5PFBlcnNvbj47XHJcbiAgICBjb2x1bW5zOiBBcnJheTxDb2x1bW4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVvcGxlKCk6IEFycmF5PFBlcnNvbj4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHtmaXJzdE5hbWU6J0pvZScsbGFzdE5hbWU6J0phY2tzb24nLGFnZToyMH0sXHJcbiAgICAgICAgICAgIHtmaXJzdE5hbWU6J1BldGVyJyxsYXN0TmFtZTonU21pdGgnLGFnZTozMH0sXHJcbiAgICAgICAgICAgIHtmaXJzdE5hbWU6J0phbmUnLGxhc3ROYW1lOidEb2UnLGFnZTo1MH0sXHJcbiAgICAgICAgICAgIHtmaXJzdE5hbWU6J1RpbScsbGFzdE5hbWU6J1NtaXRoJyxhZ2U6ODB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW5zKCk6IEFycmF5PENvbHVtbj4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ2ZpcnN0TmFtZScsJ0ZpcnN0IE5hbWUnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignbGFzdE5hbWUnLCdMYXN0IE5hbWUnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignYWdlJywnQWdlJylcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICB0aGlzLnBlb3BsZSA9IHRoaXMuZ2V0UGVvcGxlKCk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQZXJzb24ge1xyXG4gICAgZmlyc3ROYW1lOnN0cmluZztcclxuICAgIGxhc3ROYW1lOnN0cmluZztcclxuICAgIGFnZTpudW1iZXI7XHJcbn0iXX0=