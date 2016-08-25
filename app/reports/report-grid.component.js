System.register(['@angular/core', '../grid/grid', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, grid_1, router_1;
    var ReportGridComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ReportGridComponent = (function (_super) {
                __extends(ReportGridComponent, _super);
                function ReportGridComponent(_router) {
                    _super.call(this);
                    this._router = _router;
                }
                ReportGridComponent.prototype.onClick = function (row) {
                    this._router.navigate(['/workbench', row.id]);
                };
                ReportGridComponent = __decorate([
                    core_1.Component({
                        selector: 'report-grid',
                        inputs: ['rows: rows', 'columns: columns'],
                        templateUrl: 'app/reports/report-grid.component.html',
                        styles: ['.gridHeader {cursor:pointer;}']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ReportGridComponent);
                return ReportGridComponent;
            }(grid_1.Grid));
            exports_1("ReportGridComponent", ReportGridComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBeUMsdUNBQUk7Z0JBQ3pDLDZCQUFvQixPQUFlO29CQUMvQixpQkFBTyxDQUFDO29CQURRLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBRW5DLENBQUM7Z0JBRUQscUNBQU8sR0FBUCxVQUFRLEdBQVE7b0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFHLENBQUM7Z0JBQ3JELENBQUM7Z0JBZEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFDLGtCQUFrQixDQUFDO3dCQUN6QyxXQUFXLEVBQUUsd0NBQXdDO3dCQUNyRCxNQUFNLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztxQkFFNUMsQ0FBQzs7dUNBQUE7Z0JBVUYsMEJBQUM7WUFBRCxDQUFDLEFBVEQsQ0FBeUMsV0FBSSxHQVM1QztZQVRELHFEQVNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R3JpZH0gICBmcm9tICcuLi9ncmlkL2dyaWQnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZXBvcnQtZ3JpZCcsXHJcbiAgICBpbnB1dHM6IFsncm93czogcm93cycsJ2NvbHVtbnM6IGNvbHVtbnMnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlcG9ydHMvcmVwb3J0LWdyaWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbJy5ncmlkSGVhZGVyIHtjdXJzb3I6cG9pbnRlcjt9J11cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRHcmlkQ29tcG9uZW50IGV4dGVuZHMgR3JpZHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2socm93OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoIFsnL3dvcmtiZW5jaCcsIHJvdy5pZF0gICk7XHJcbiAgICB9XHJcblxyXG59Il19