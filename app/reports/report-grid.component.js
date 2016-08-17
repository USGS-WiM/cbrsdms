"use strict";
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
var core_1 = require('@angular/core');
var grid_1 = require('../grid/grid');
var router_1 = require('@angular/router');
var ReportGridComponent = (function (_super) {
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
            selector: 'grid',
            inputs: ['rows: rows', 'columns: columns'],
            templateUrl: 'app/reports/report-grid.component.html',
            styles: ['.gridHeader {cursor:pointer;}']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ReportGridComponent);
    return ReportGridComponent;
}(grid_1.Grid));
exports.ReportGridComponent = ReportGridComponent;
//# sourceMappingURL=report-grid.component.js.map