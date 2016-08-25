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
    var WorkbenchGridComponent;
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
            WorkbenchGridComponent = (function (_super) {
                __extends(WorkbenchGridComponent, _super);
                function WorkbenchGridComponent(_router) {
                    _super.call(this);
                    this._router = _router;
                }
                WorkbenchGridComponent.prototype.onClick = function (row) {
                    this._router.navigate(['/workbench', row.id]);
                };
                WorkbenchGridComponent = __decorate([
                    core_1.Component({
                        selector: 'workbench-grid',
                        inputs: ['rows: rows', 'columns: columns'],
                        templateUrl: 'app/workbench/workbench-grid.component.html',
                        styles: ['.gridHeader {cursor:pointer;}']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], WorkbenchGridComponent);
                return WorkbenchGridComponent;
            }(grid_1.Grid));
            exports_1("WorkbenchGridComponent", WorkbenchGridComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2JlbmNoLWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBNEMsMENBQUk7Z0JBQzVDLGdDQUFvQixPQUFlO29CQUMvQixpQkFBTyxDQUFDO29CQURRLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBRW5DLENBQUM7Z0JBRUQsd0NBQU8sR0FBUCxVQUFRLEdBQVE7b0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFHLENBQUM7Z0JBQ3JELENBQUM7Z0JBZEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUMsa0JBQWtCLENBQUM7d0JBQ3pDLFdBQVcsRUFBRSw2Q0FBNkM7d0JBQzFELE1BQU0sRUFBRSxDQUFDLCtCQUErQixDQUFDO3FCQUU1QyxDQUFDOzswQ0FBQTtnQkFTRiw2QkFBQztZQUFELENBQUMsQUFSRCxDQUE0QyxXQUFJLEdBUS9DO1lBUkQsMkRBUUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHcmlkfSAgIGZyb20gJy4uL2dyaWQvZ3JpZCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dvcmtiZW5jaC1ncmlkJyxcclxuICAgIGlucHV0czogWydyb3dzOiByb3dzJywnY29sdW1uczogY29sdW1ucyddLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvd29ya2JlbmNoL3dvcmtiZW5jaC1ncmlkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogWycuZ3JpZEhlYWRlciB7Y3Vyc29yOnBvaW50ZXI7fSddXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29ya2JlbmNoR3JpZENvbXBvbmVudCBleHRlbmRzIEdyaWR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25DbGljayhyb3c6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZSggWycvd29ya2JlbmNoJywgcm93LmlkXSAgKTtcclxuICAgIH1cclxufSJdfQ==