(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/layouts/fesm5/ngry-layouts.js":
/*!***********************************************************************!*\
  !*** /Users/achugaev/ngry/layouts/dist/layouts/fesm5/ngry-layouts.js ***!
  \***********************************************************************/
/*! exports provided: LayersLayoutModule, MediaLayoutModule, PanelLayoutModule, StackLayoutModule, TilesLayoutModule, StageLayoutModule, ViewportLayoutModule, ɵb, ɵa, ɵf, ɵd, ɵe, ɵc, ɵg, ɵi, ɵj, ɵh, ɵm, ɵl, ɵk, ɵn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersLayoutModule", function() { return LayersLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaLayoutModule", function() { return MediaLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelLayoutModule", function() { return PanelLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackLayoutModule", function() { return StackLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesLayoutModule", function() { return TilesLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageLayoutModule", function() { return StageLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportLayoutModule", function() { return ViewportLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return LayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LayersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return MediaActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return MediaContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MediaDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return MediaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return StackBlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return StackBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return StackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return StageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return TilesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return ViewportComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayersComponent = /** @class */ (function () {
    function LayersComponent() {
    }
    LayersComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-layers',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-grow:1;flex-direction:column;position:relative;overflow:hidden}"]
                }] }
    ];
    return LayersComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayerComponent = /** @class */ (function () {
    function LayerComponent() {
    }
    LayerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-layer',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-grow:1;flex-direction:column;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}"]
                }] }
    ];
    return LayerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayersLayoutModule = /** @class */ (function () {
    function LayersLayoutModule() {
    }
    LayersLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [LayersComponent, LayerComponent],
                    exports: [LayersComponent, LayerComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ]
                },] }
    ];
    return LayersLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    MediaComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-media',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-grow:1;flex-direction:row;flex-wrap:nowrap;align-items:center}"]
                }] }
    ];
    return MediaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediaDetailsComponent = /** @class */ (function () {
    function MediaDetailsComponent() {
    }
    MediaDetailsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-media-details',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:block;flex-grow:1;overflow:hidden}"]
                }] }
    ];
    return MediaDetailsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediaActionComponent = /** @class */ (function () {
    function MediaActionComponent() {
    }
    MediaActionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-media-action',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-grow:0;flex-direction:column}"]
                }] }
    ];
    return MediaActionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediaContentComponent = /** @class */ (function () {
    function MediaContentComponent() {
    }
    MediaContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-media-content',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-grow:0;flex-direction:column}"]
                }] }
    ];
    return MediaContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediaLayoutModule = /** @class */ (function () {
    function MediaLayoutModule() {
    }
    MediaLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [MediaComponent, MediaContentComponent, MediaDetailsComponent, MediaActionComponent],
                    exports: [MediaComponent, MediaContentComponent, MediaDetailsComponent, MediaActionComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ]
                },] }
    ];
    return MediaLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.x = 'center';
        this.y = 'center';
    }
    PanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-panel',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-grow:1;flex-direction:column}:host[x=left]{align-items:flex-start}:host[x=center]{align-items:center}:host[x=right]{align-items:flex-end}:host[y=top]{justify-content:flex-start}:host[y=center]{justify-content:center}:host[y=bottom]{justify-content:flex-end}"]
                }] }
    ];
    PanelComponent.propDecorators = {
        x: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.x',] }],
        y: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.y',] }]
    };
    return PanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelLayoutModule = /** @class */ (function () {
    function PanelLayoutModule() {
    }
    PanelLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [PanelComponent],
                    exports: [PanelComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ]
                },] }
    ];
    return PanelLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StackComponent = /** @class */ (function () {
    function StackComponent() {
        this.direction = 'column';
    }
    Object.defineProperty(StackComponent.prototype, "isRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this.direction === 'row';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackComponent.prototype, "isColumn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.direction === 'column';
        },
        enumerable: true,
        configurable: true
    });
    StackComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-stack',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-grow:1}:host.row{flex-direction:row}:host.column{flex-direction:column}"]
                }] }
    ];
    StackComponent.propDecorators = {
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.direction',] }],
        isRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.row',] }],
        isColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.column',] }]
    };
    return StackComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StackBlockComponent = /** @class */ (function () {
    function StackBlockComponent() {
    }
    StackBlockComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-stack-block',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-direction:column;flex-grow:0}"]
                }] }
    ];
    return StackBlockComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StackBodyComponent = /** @class */ (function () {
    function StackBodyComponent() {
    }
    StackBodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-stack-body',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-direction:column;flex-grow:1}"]
                }] }
    ];
    return StackBodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StackLayoutModule = /** @class */ (function () {
    function StackLayoutModule() {
    }
    StackLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [StackComponent, StackBlockComponent, StackBodyComponent],
                    exports: [StackComponent, StackBlockComponent, StackBodyComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ]
                },] }
    ];
    return StackLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TilesComponent = /** @class */ (function () {
    function TilesComponent() {
    }
    TilesComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-tiles',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:flex;flex-direction:row;flex-wrap:wrap}"]
                }] }
    ];
    return TilesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TileComponent = /** @class */ (function () {
    function TileComponent() {
    }
    TileComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-tile',
                    template: '<ng-content></ng-content>',
                    styles: [":host{display:inline-flex;flex-grow:0;flex-direction:column}"]
                }] }
    ];
    return TileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TilesLayoutModule = /** @class */ (function () {
    function TilesLayoutModule() {
    }
    TilesLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [TilesComponent, TileComponent],
                    exports: [TilesComponent, TileComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ]
                },] }
    ];
    return TilesLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StageComponent = /** @class */ (function () {
    function StageComponent() {
    }
    /**
     * @return {?}
     */
    StageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    StageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-stage',
                    template: "<div class=\"l-stage\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{display:flex;flex-grow:1;flex-direction:column;position:relative}.l-stage{display:flex;flex-grow:1;flex-direction:column;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    StageComponent.ctorParameters = function () { return []; };
    return StageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StageLayoutModule = /** @class */ (function () {
    function StageLayoutModule() {
    }
    StageLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [StageComponent],
                    exports: [StageComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ]
                },] }
    ];
    return StageLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewportComponent = /** @class */ (function () {
    function ViewportComponent() {
    }
    ViewportComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'l-viewport',
                    template: "<div class=\"l-viewport__view\">\n  <div class=\"l-viewport__content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    styles: [":host{position:relative;display:block;flex-grow:1}.l-viewport__view{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto}.l-viewport__content{display:flex;flex-direction:column;flex-grow:1;min-height:100%}"]
                }] }
    ];
    return ViewportComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ViewportLayoutModule = /** @class */ (function () {
    function ViewportLayoutModule() {
    }
    ViewportLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [ViewportComponent],
                    exports: [ViewportComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ]
                },] }
    ];
    return ViewportLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngry-layouts.js.map

/***/ }),

/***/ "../layouts/src/lib/tiles/tile/tile.component.css":
/*!********************************************************!*\
  !*** ../layouts/src/lib/tiles/tile/tile.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-flex;\n  flex-grow: 0;\n  flex-direction: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2xheW91dHMvc3JjL2xpYi90aWxlcy90aWxlL3RpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InByb2plY3RzL2xheW91dHMvc3JjL2xpYi90aWxlcy90aWxlL3RpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../layouts/src/lib/tiles/tile/tile.component.ts":
/*!*******************************************************!*\
  !*** ../layouts/src/lib/tiles/tile/tile.component.ts ***!
  \*******************************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TileComponent = /** @class */ (function () {
    function TileComponent() {
    }
    TileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'l-tile',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./tile.component.css */ "../layouts/src/lib/tiles/tile/tile.component.css")]
        })
    ], TileComponent);
    return TileComponent;
}());



/***/ }),

/***/ "../layouts/src/lib/tiles/tiles-layout.module.ts":
/*!*******************************************************!*\
  !*** ../layouts/src/lib/tiles/tiles-layout.module.ts ***!
  \*******************************************************/
/*! exports provided: TilesLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesLayoutModule", function() { return TilesLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tiles_tiles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiles/tiles.component */ "../layouts/src/lib/tiles/tiles/tiles.component.ts");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile/tile.component */ "../layouts/src/lib/tiles/tile/tile.component.ts");





var TilesLayoutModule = /** @class */ (function () {
    function TilesLayoutModule() {
    }
    TilesLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tiles_tiles_component__WEBPACK_IMPORTED_MODULE_3__["TilesComponent"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"]],
            exports: [_tiles_tiles_component__WEBPACK_IMPORTED_MODULE_3__["TilesComponent"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_4__["TileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], TilesLayoutModule);
    return TilesLayoutModule;
}());



/***/ }),

/***/ "../layouts/src/lib/tiles/tiles/tiles.component.css":
/*!**********************************************************!*\
  !*** ../layouts/src/lib/tiles/tiles/tiles.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2xheW91dHMvc3JjL2xpYi90aWxlcy90aWxlcy90aWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoicHJvamVjdHMvbGF5b3V0cy9zcmMvbGliL3RpbGVzL3RpbGVzL3RpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../layouts/src/lib/tiles/tiles/tiles.component.ts":
/*!*********************************************************!*\
  !*** ../layouts/src/lib/tiles/tiles/tiles.component.ts ***!
  \*********************************************************/
/*! exports provided: TilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesComponent", function() { return TilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TilesComponent = /** @class */ (function () {
    function TilesComponent() {
    }
    TilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'l-tiles',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./tiles.component.css */ "../layouts/src/lib/tiles/tiles/tiles.component.css")]
        })
    ], TilesComponent);
    return TilesComponent;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7Q0FDbEIiLCJmaWxlIjoicHJvamVjdHMvZXhhbXBsZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <header>\n      <l-stack direction=\"row\">\n        <l-stack-block>\n          <a class=\"clickable\" routerLink=\"/\">\n            <app-block>\n              <l-media>\n                <l-media-content>\n                  <app-block>\n                    <img src=\"favicon.ico\" alt=\"icon\" width=\"16\" height=\"16\"/>\n                  </app-block>\n                </l-media-content>\n                <l-media-details>\n                  <app-block>\n                    <strong>Layouts</strong>\n                  </app-block>\n                </l-media-details>\n              </l-media>\n            </app-block>\n          </a>\n        </l-stack-block>\n        <l-stack-body>\n          <!-- empty -->\n        </l-stack-body>\n        <l-stack-block>\n          <l-panel>\n            <nav>\n              <l-stack direction=\"row\">\n                <l-stack-block>\n                  <a class=\"clickable\" routerLink=\"layouts\" routerLinkActive=\"active\">\n                    <app-block>\n                      <app-block>\n                        Layouts\n                      </app-block>\n                    </app-block>\n                  </a>\n                </l-stack-block>\n                <l-stack-block>\n                  <a class=\"clickable\" routerLink=\"about\" routerLinkActive=\"active\">\n                    <app-block>\n                      <app-block>\n                        About\n                      </app-block>\n                    </app-block>\n                  </a>\n                </l-stack-block>\n              </l-stack>\n            </nav>\n          </l-panel>\n        </l-stack-block>\n      </l-stack>\n    </header>\n  </l-stack-block>\n  <l-stack-body>\n    <router-outlet></router-outlet>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_route_title_route_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/route-title/route-title.service */ "./src/app/services/route-title/route-title.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(routeTitleService) {
        this.routeTitleService = routeTitleService;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_route_title_route_title_service__WEBPACK_IMPORTED_MODULE_2__["RouteTitleService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngry_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngry/layouts */ "../../dist/layouts/fesm5/ngry-layouts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_block_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/block/block.component */ "./src/app/components/block/block.component.ts");
/* harmony import */ var _mocks_media_mock_media_mock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mocks/media-mock/media-mock.component */ "./src/app/mocks/media-mock/media-mock.component.ts");
/* harmony import */ var _zones_layouts_zone_layouts_zone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zones/layouts-zone/layouts-zone.component */ "./src/app/zones/layouts-zone/layouts-zone.component.ts");
/* harmony import */ var _components_text_line_text_line_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text-line/text-line.component */ "./src/app/components/text-line/text-line.component.ts");
/* harmony import */ var _mocks_panel_mock_panel_mock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mocks/panel-mock/panel-mock.component */ "./src/app/mocks/panel-mock/panel-mock.component.ts");
/* harmony import */ var _mocks_viewport_mock_viewport_mock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mocks/viewport-mock/viewport-mock.component */ "./src/app/mocks/viewport-mock/viewport-mock.component.ts");
/* harmony import */ var _mocks_stage_mock_stage_mock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mocks/stage-mock/stage-mock.component */ "./src/app/mocks/stage-mock/stage-mock.component.ts");
/* harmony import */ var _mocks_stack_mock_stack_mock_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mocks/stack-mock/stack-mock.component */ "./src/app/mocks/stack-mock/stack-mock.component.ts");
/* harmony import */ var _mocks_layers_mock_layers_mock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mocks/layers-mock/layers-mock.component */ "./src/app/mocks/layers-mock/layers-mock.component.ts");
/* harmony import */ var _zones_about_zone_about_zone_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zones/about-zone/about-zone.component */ "./src/app/zones/about-zone/about-zone.component.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _services_route_title_route_title_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/route-title/route-title.service */ "./src/app/services/route-title/route-title.service.ts");
/* harmony import */ var _mocks_tiles_mock_tiles_mock_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mocks/tiles-mock/tiles-mock.component */ "./src/app/mocks/tiles-mock/tiles-mock.component.ts");
/* harmony import */ var _layouts_src_lib_tiles_tiles_layout_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../layouts/src/lib/tiles/tiles-layout.module */ "../layouts/src/lib/tiles/tiles-layout.module.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_block_block_component__WEBPACK_IMPORTED_MODULE_7__["BlockComponent"],
                _mocks_media_mock_media_mock_component__WEBPACK_IMPORTED_MODULE_8__["MediaMockComponent"],
                _zones_layouts_zone_layouts_zone_component__WEBPACK_IMPORTED_MODULE_9__["LayoutsZoneComponent"],
                _components_text_line_text_line_component__WEBPACK_IMPORTED_MODULE_10__["TextLineComponent"],
                _mocks_panel_mock_panel_mock_component__WEBPACK_IMPORTED_MODULE_11__["PanelMockComponent"],
                _mocks_viewport_mock_viewport_mock_component__WEBPACK_IMPORTED_MODULE_12__["ViewportMockComponent"],
                _mocks_stage_mock_stage_mock_component__WEBPACK_IMPORTED_MODULE_13__["StageMockComponent"],
                _mocks_stack_mock_stack_mock_component__WEBPACK_IMPORTED_MODULE_14__["StackMockComponent"],
                _mocks_layers_mock_layers_mock_component__WEBPACK_IMPORTED_MODULE_15__["LayersMockComponent"],
                _zones_about_zone_about_zone_component__WEBPACK_IMPORTED_MODULE_16__["AboutZoneComponent"],
                _mocks_tiles_mock_tiles_mock_component__WEBPACK_IMPORTED_MODULE_19__["TilesMockComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngry_layouts__WEBPACK_IMPORTED_MODULE_5__["LayersLayoutModule"],
                _ngry_layouts__WEBPACK_IMPORTED_MODULE_5__["MediaLayoutModule"],
                _ngry_layouts__WEBPACK_IMPORTED_MODULE_5__["PanelLayoutModule"],
                _ngry_layouts__WEBPACK_IMPORTED_MODULE_5__["StackLayoutModule"],
                _ngry_layouts__WEBPACK_IMPORTED_MODULE_5__["StageLayoutModule"],
                _layouts_src_lib_tiles_tiles_layout_module__WEBPACK_IMPORTED_MODULE_20__["TilesLayoutModule"],
                _ngry_layouts__WEBPACK_IMPORTED_MODULE_5__["ViewportLayoutModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_17__["ServicesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'layouts'
                    },
                    {
                        path: 'layouts',
                        component: _zones_layouts_zone_layouts_zone_component__WEBPACK_IMPORTED_MODULE_9__["LayoutsZoneComponent"],
                        children: [
                            {
                                path: '',
                                pathMatch: 'full',
                                redirectTo: 'layers'
                            },
                            {
                                path: 'layers',
                                component: _mocks_layers_mock_layers_mock_component__WEBPACK_IMPORTED_MODULE_15__["LayersMockComponent"],
                                data: {
                                    title: 'Layers layout'
                                }
                            },
                            {
                                path: 'media',
                                component: _mocks_media_mock_media_mock_component__WEBPACK_IMPORTED_MODULE_8__["MediaMockComponent"],
                                data: {
                                    title: 'Media layout'
                                }
                            },
                            {
                                path: 'panel',
                                component: _mocks_panel_mock_panel_mock_component__WEBPACK_IMPORTED_MODULE_11__["PanelMockComponent"],
                                data: {
                                    title: 'Panel layout'
                                }
                            },
                            {
                                path: 'stack',
                                component: _mocks_stack_mock_stack_mock_component__WEBPACK_IMPORTED_MODULE_14__["StackMockComponent"],
                                data: {
                                    title: 'Stack layout'
                                }
                            },
                            {
                                path: 'stage',
                                component: _mocks_stage_mock_stage_mock_component__WEBPACK_IMPORTED_MODULE_13__["StageMockComponent"],
                                data: {
                                    title: 'Stage layout'
                                }
                            },
                            {
                                path: 'tiles',
                                component: _mocks_tiles_mock_tiles_mock_component__WEBPACK_IMPORTED_MODULE_19__["TilesMockComponent"],
                                data: {
                                    title: 'Tiles layout'
                                }
                            },
                            {
                                path: 'viewport',
                                component: _mocks_viewport_mock_viewport_mock_component__WEBPACK_IMPORTED_MODULE_12__["ViewportMockComponent"],
                                data: {
                                    title: 'Viewport layout'
                                }
                            }
                        ]
                    },
                    {
                        path: 'about',
                        component: _zones_about_zone_about_zone_component__WEBPACK_IMPORTED_MODULE_16__["AboutZoneComponent"],
                        data: {
                            title: 'About'
                        }
                    }
                ], {
                    useHash: true
                })
            ],
            providers: [_services_route_title_route_title_service__WEBPACK_IMPORTED_MODULE_18__["RouteTitleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/block/block.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/block/block.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 5px 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9jb21wb25lbnRzL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9jb21wb25lbnRzL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHggNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/block/block.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/block/block.component.ts ***!
  \*****************************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var BlockComponent = /** @class */ (function () {
    function BlockComponent() {
    }
    BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./block.component.css */ "./src/app/components/block/block.component.css")]
        })
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/components/text-line/text-line.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/text-line/text-line.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9jb21wb25lbnRzL3RleHQtbGluZS90ZXh0LWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix3QkFBd0I7Q0FDekIiLCJmaWxlIjoicHJvamVjdHMvZXhhbXBsZS9zcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1saW5lL3RleHQtbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLW1zLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/text-line/text-line.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/text-line/text-line.component.ts ***!
  \*************************************************************/
/*! exports provided: TextLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLineComponent", function() { return TextLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TextLineComponent = /** @class */ (function () {
    function TextLineComponent() {
    }
    TextLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-line',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./text-line.component.css */ "./src/app/components/text-line/text-line.component.css")]
        })
    ], TextLineComponent);
    return TextLineComponent;
}());



/***/ }),

/***/ "./src/app/mocks/layers-mock/layers-mock.component.css":
/*!*************************************************************!*\
  !*** ./src/app/mocks/layers-mock/layers-mock.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n}\n\nstrong {\n  font-size: 120px;\n  font-weight: 900;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9sYXllcnMtbW9jay9sYXllcnMtbW9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9sYXllcnMtbW9jay9sYXllcnMtbW9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/mocks/layers-mock/layers-mock.component.html":
/*!**************************************************************!*\
  !*** ./src/app/mocks/layers-mock/layers-mock.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <h1>\n      <app-block>\n        <app-block>\n          Layers\n        </app-block>\n      </app-block>\n    </h1>\n    <hr>\n  </l-stack-block>\n  <l-stack-body>\n    <l-layers>\n\n      <l-layer style=\"background: center center / cover url('assets/images/ny.jpg');\">\n      </l-layer>\n\n      <l-layer style=\"background: rgba(0,0,0,0.2)\"></l-layer>\n\n      <l-layer>\n        <l-panel>\n          <strong style=\"color: rgba(255,255,255,0.8);\">NEW YORK</strong>\n        </l-panel>\n      </l-layer>\n\n    </l-layers>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/mocks/layers-mock/layers-mock.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mocks/layers-mock/layers-mock.component.ts ***!
  \************************************************************/
/*! exports provided: LayersMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersMockComponent", function() { return LayersMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LayersMockComponent = /** @class */ (function () {
    function LayersMockComponent() {
    }
    LayersMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layers-mock',
            template: __webpack_require__(/*! ./layers-mock.component.html */ "./src/app/mocks/layers-mock/layers-mock.component.html"),
            styles: [__webpack_require__(/*! ./layers-mock.component.css */ "./src/app/mocks/layers-mock/layers-mock.component.css")]
        })
    ], LayersMockComponent);
    return LayersMockComponent;
}());



/***/ }),

/***/ "./src/app/mocks/media-mock/media-mock.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mocks/media-mock/media-mock.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9tZWRpYS1tb2NrL21lZGlhLW1vY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9tZWRpYS1tb2NrL21lZGlhLW1vY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mocks/media-mock/media-mock.component.html":
/*!************************************************************!*\
  !*** ./src/app/mocks/media-mock/media-mock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <h1>\n      <app-block>\n        <app-block>\n          Media\n        </app-block>\n      </app-block>\n    </h1>\n    <hr>\n  </l-stack-block>\n  <l-stack-body>\n    <l-viewport>\n\n      <div class=\"clickable\">\n        <app-block>\n          <l-media>\n            <l-media-action>\n              <app-block>\n                <input type=\"checkbox\" title=\"Item\">\n              </app-block>\n            </l-media-action>\n            <l-media-action>\n              <app-block>\n                <i class=\"far fa-star\"></i>\n              </app-block>\n            </l-media-action>\n            <l-media-details>\n              <app-block>\n                <app-text-line>Lorem ipsum dolor sit.</app-text-line>\n              </app-block>\n            </l-media-details>\n            <l-media-action>\n              <app-block>\n                <i class=\"fa fa-angle-right\"></i>\n              </app-block>\n            </l-media-action>\n          </l-media>\n        </app-block>\n      </div>\n\n      <div class=\"clickable\">\n        <app-block>\n          <l-media>\n            <l-media-action>\n              <app-block>\n                <input type=\"checkbox\" title=\"Item\">\n              </app-block>\n            </l-media-action>\n            <l-media-action>\n              <app-block>\n                <i class=\"far fa-star\"></i>\n              </app-block>\n            </l-media-action>\n            <l-media-details>\n              <app-block>\n                <app-text-line>Lorem ipsum dolor sit.</app-text-line>\n              </app-block>\n            </l-media-details>\n            <l-media-action>\n              <app-block>\n                <i class=\"fa fa-angle-right\"></i>\n              </app-block>\n            </l-media-action>\n          </l-media>\n        </app-block>\n      </div>\n\n      <div class=\"clickable\">\n        <app-block>\n          <l-media>\n            <l-media-action>\n              <app-block>\n                <input type=\"checkbox\" title=\"Item\">\n              </app-block>\n            </l-media-action>\n            <l-media-action>\n              <app-block>\n                <i class=\"far fa-star\"></i>\n              </app-block>\n            </l-media-action>\n            <l-media-details>\n              <app-block>\n                <app-text-line>Lorem ipsum dolor sit.</app-text-line>\n              </app-block>\n            </l-media-details>\n            <l-media-action>\n              <app-block>\n                <i class=\"fa fa-angle-right\"></i>\n              </app-block>\n            </l-media-action>\n          </l-media>\n        </app-block>\n      </div>\n\n      <div class=\"clickable\">\n        <app-block>\n          <l-media>\n            <l-media-action>\n              <app-block>\n                <input type=\"checkbox\" title=\"Item\">\n              </app-block>\n            </l-media-action>\n            <l-media-action>\n              <app-block>\n                <i class=\"far fa-star\"></i>\n              </app-block>\n            </l-media-action>\n            <l-media-details>\n              <app-block>\n                <app-text-line>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur aut culpa debitis, dicta excepturi inventore itaque nisi nostrum officiis sunt. Aperiam ducimus error maiores perspiciatis quisquam quod voluptas? Assumenda, blanditiis consequatur dicta doloribus et ipsam, laborum molestiae mollitia neque, nisi nobis quaerat qui sequi. Ad alias architecto ducimus eligendi eum illum ipsa itaque, iusto maiores modi mollitia nostrum, numquam officia pariatur possimus qui quis ratione repellat suscipit ut vel voluptas voluptatem. Ad animi cum dolorem excepturi explicabo iusto mollitia nostrum numquam odio perferendis, quisquam repellendus sed vero! Aliquam blanditiis delectus distinctio in inventore, nobis placeat quo soluta totam.\n                </app-text-line>\n              </app-block>\n            </l-media-details>\n            <l-media-action>\n              <app-block>\n                <i class=\"fa fa-angle-right\"></i>\n              </app-block>\n            </l-media-action>\n          </l-media>\n        </app-block>\n      </div>\n\n    </l-viewport>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/mocks/media-mock/media-mock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mocks/media-mock/media-mock.component.ts ***!
  \**********************************************************/
/*! exports provided: MediaMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMockComponent", function() { return MediaMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var MediaMockComponent = /** @class */ (function () {
    function MediaMockComponent() {
    }
    MediaMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media-mock',
            template: __webpack_require__(/*! ./media-mock.component.html */ "./src/app/mocks/media-mock/media-mock.component.html"),
            styles: [__webpack_require__(/*! ./media-mock.component.css */ "./src/app/mocks/media-mock/media-mock.component.css")]
        })
    ], MediaMockComponent);
    return MediaMockComponent;
}());



/***/ }),

/***/ "./src/app/mocks/panel-mock/panel-mock.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mocks/panel-mock/panel-mock.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9wYW5lbC1tb2NrL3BhbmVsLW1vY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9wYW5lbC1tb2NrL3BhbmVsLW1vY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mocks/panel-mock/panel-mock.component.html":
/*!************************************************************!*\
  !*** ./src/app/mocks/panel-mock/panel-mock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <h1>\n      <app-block>\n        <app-block>\n          Panel\n        </app-block>\n      </app-block>\n    </h1>\n    <hr>\n  </l-stack-block>\n  <l-stack-block>\n    <form>\n      <app-block>\n        <l-stack direction=\"row\">\n          <l-stack-block>\n            <app-block>\n              X:\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"x\" value=\"left\" [checked]=\"x === 'left'\" (change)=\"setX('left')\">\n                left\n              </label>\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"x\" value=\"center\" [checked]=\"x === 'center'\" (change)=\"setX('center')\">\n                center\n              </label>\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"x\" value=\"right\" [checked]=\"x === 'right'\" (change)=\"setX('right')\">\n                right\n              </label>\n            </app-block>\n          </l-stack-block>\n        </l-stack>\n      </app-block>\n      <app-block>\n        <l-stack direction=\"row\">\n          <l-stack-block>\n            <app-block>\n              Y:\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"y\" [checked]=\"y === 'top'\" (change)=\"setY('top')\">\n                top\n              </label>\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"y\" [checked]=\"y === 'center'\" (change)=\"setY('center')\">\n                center\n              </label>\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"y\" [checked]=\"y === 'bottom'\" (change)=\"setY('bottom')\">\n                bottom\n              </label>\n            </app-block>\n          </l-stack-block>\n        </l-stack>\n      </app-block>\n    </form>\n    <hr>\n  </l-stack-block>\n  <l-stack-body>\n    <l-viewport>\n\n      <l-panel [x]=\"x\" [y]=\"y\">\n        <app-block>\n          <img src=\"assets/images/ny.jpg\" alt=\"logo\" width=\"320\" />\n        </app-block>\n      </l-panel>\n\n    </l-viewport>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/mocks/panel-mock/panel-mock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mocks/panel-mock/panel-mock.component.ts ***!
  \**********************************************************/
/*! exports provided: PanelMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMockComponent", function() { return PanelMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PanelMockComponent = /** @class */ (function () {
    function PanelMockComponent() {
        this.x = 'center';
        this.y = 'center';
    }
    PanelMockComponent.prototype.setX = function (x) {
        this.x = x;
    };
    PanelMockComponent.prototype.setY = function (y) {
        this.y = y;
    };
    PanelMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel-mock',
            template: __webpack_require__(/*! ./panel-mock.component.html */ "./src/app/mocks/panel-mock/panel-mock.component.html"),
            styles: [__webpack_require__(/*! ./panel-mock.component.css */ "./src/app/mocks/panel-mock/panel-mock.component.css")]
        })
    ], PanelMockComponent);
    return PanelMockComponent;
}());



/***/ }),

/***/ "./src/app/mocks/stack-mock/stack-mock.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mocks/stack-mock/stack-mock.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9zdGFjay1tb2NrL3N0YWNrLW1vY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9zdGFjay1tb2NrL3N0YWNrLW1vY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mocks/stack-mock/stack-mock.component.html":
/*!************************************************************!*\
  !*** ./src/app/mocks/stack-mock/stack-mock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <h1>\n      <app-block>\n        <app-block>\n          Stack layout\n        </app-block>\n      </app-block>\n    </h1>\n    <hr>\n  </l-stack-block>\n  <l-stack-block>\n    <form>\n      <app-block>\n        <l-stack direction=\"row\">\n          <l-stack-block>\n            <app-block>\n              Direction:\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"direction\" value=\"column\" [checked]=\"direction === 'column'\" (change)=\"setDirection('column')\">\n                column\n              </label>\n            </app-block>\n          </l-stack-block>\n          <l-stack-block>\n            <app-block>\n              <label>\n                <input type=\"radio\" name=\"direction\" value=\"row\" [checked]=\"direction === 'row'\" (change)=\"setDirection('row')\">\n                row\n              </label>\n            </app-block>\n          </l-stack-block>\n        </l-stack>\n      </app-block>\n    </form>\n    <hr>\n  </l-stack-block>\n\n  <l-stack-body>\n    <l-stack [direction]=\"direction\">\n      <l-stack-block style=\"background: #ddd;\">\n        <app-block>\n          <app-block>\n            Block #1\n          </app-block>\n        </app-block>\n      </l-stack-block>\n      <l-stack-body style=\"background: #eee;\">\n        <app-block>\n          <app-block>\n            Body #1\n          </app-block>\n        </app-block>\n      </l-stack-body>\n      <l-stack-block style=\"background: #ddd;\">\n        <app-block>\n          <app-block>\n            Block #2\n          </app-block>\n        </app-block>\n      </l-stack-block>\n      <l-stack-body style=\"background: #eee;\">\n        <app-block>\n          <app-block>\n            Body #2\n          </app-block>\n        </app-block>\n      </l-stack-body>\n    </l-stack>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/mocks/stack-mock/stack-mock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mocks/stack-mock/stack-mock.component.ts ***!
  \**********************************************************/
/*! exports provided: StackMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackMockComponent", function() { return StackMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var StackMockComponent = /** @class */ (function () {
    function StackMockComponent() {
        this.direction = 'column';
    }
    StackMockComponent.prototype.setDirection = function (direction) {
        this.direction = direction;
    };
    StackMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stack-mock',
            template: __webpack_require__(/*! ./stack-mock.component.html */ "./src/app/mocks/stack-mock/stack-mock.component.html"),
            styles: [__webpack_require__(/*! ./stack-mock.component.css */ "./src/app/mocks/stack-mock/stack-mock.component.css")]
        })
    ], StackMockComponent);
    return StackMockComponent;
}());



/***/ }),

/***/ "./src/app/mocks/stage-mock/stage-mock.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mocks/stage-mock/stage-mock.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9zdGFnZS1tb2NrL3N0YWdlLW1vY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy9zdGFnZS1tb2NrL3N0YWdlLW1vY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mocks/stage-mock/stage-mock.component.html":
/*!************************************************************!*\
  !*** ./src/app/mocks/stage-mock/stage-mock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <h1>\n      <app-block>\n        <app-block>\n          Stage\n        </app-block>\n      </app-block>\n    </h1>\n    <hr>\n  </l-stack-block>\n  <l-stack-body>\n    <l-stage>\n      <img src=\"favicon.ico\" alt=\"logo\" width=\"16\" height=\"16\" style=\"position: absolute; top: 32px; left: 32px;\" />\n      <img src=\"favicon.ico\" alt=\"logo\" width=\"16\" height=\"16\" style=\"position: absolute; top: 64px; left: 64px;\" />\n      <img src=\"favicon.ico\" alt=\"logo\" width=\"16\" height=\"16\" style=\"position: absolute; top: 32px; left: 96px;\" />\n      <img src=\"favicon.ico\" alt=\"logo\" width=\"16\" height=\"16\" style=\"position: absolute; top: 64px; left: 128px;\" />\n    </l-stage>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/mocks/stage-mock/stage-mock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mocks/stage-mock/stage-mock.component.ts ***!
  \**********************************************************/
/*! exports provided: StageMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageMockComponent", function() { return StageMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var StageMockComponent = /** @class */ (function () {
    function StageMockComponent() {
    }
    StageMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stage-mock',
            template: __webpack_require__(/*! ./stage-mock.component.html */ "./src/app/mocks/stage-mock/stage-mock.component.html"),
            styles: [__webpack_require__(/*! ./stage-mock.component.css */ "./src/app/mocks/stage-mock/stage-mock.component.css")]
        })
    ], StageMockComponent);
    return StageMockComponent;
}());



/***/ }),

/***/ "./src/app/mocks/tiles-mock/tiles-mock.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mocks/tiles-mock/tiles-mock.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n}\n\nl-tile app-block {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\nl-tile > app-block > app-block {\n  width: 300px;\n  background: #eee;\n  border-radius: 3px;\n}\n\nl-tile app-block img {\n  width: 100%;\n  height: auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy90aWxlcy1tb2NrL3RpbGVzLW1vY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7Q0FDeEI7O0FBR0Q7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2QiLCJmaWxlIjoicHJvamVjdHMvZXhhbXBsZS9zcmMvYXBwL21vY2tzL3RpbGVzLW1vY2svdGlsZXMtbW9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmwtdGlsZSBhcHAtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cblxubC10aWxlID4gYXBwLWJsb2NrID4gYXBwLWJsb2NrIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmwtdGlsZSBhcHAtYmxvY2sgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/mocks/tiles-mock/tiles-mock.component.html":
/*!************************************************************!*\
  !*** ./src/app/mocks/tiles-mock/tiles-mock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <h1>\n      <app-block>\n        <app-block>\n          Tiles layout\n        </app-block>\n      </app-block>\n    </h1>\n    <hr>\n  </l-stack-block>\n  <l-stack-body>\n    <l-viewport>\n      <app-block>\n        <l-tiles>\n          <l-tile>\n            <app-block>\n              <app-block>\n                <l-stack>\n                  <l-stack-body>\n                    <app-block>\n                      <img src=\"assets/images/ny.jpg\" alt=\"NY\"/>\n                    </app-block>\n                  </l-stack-body>\n                  <l-stack-block>\n                    <app-block>\n                      <button>action</button>\n                    </app-block>\n                  </l-stack-block>\n                </l-stack>\n              </app-block>\n            </app-block>\n          </l-tile>\n\n          <l-tile>\n            <app-block>\n              <app-block>\n                <l-stack>\n                  <l-stack-body>\n                    <app-block>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem ex harum illum ipsa ipsum\n                      laudantium omnis quod ullam voluptatibus. Cum ex impedit inventore iure molestiae odio suscipit.\n                      Aliquid\n                      asperiores autem, corporis dicta, dolores dolorum enim iusto labore laboriosam magni molestiae\n                      necessitatibus numquam officiis pariatur provident ratione reiciendis rem sapiente similique sint\n                      tempore\n                      tenetur ullam vero. Aperiam aspernatur atque beatae cum laborum modi natus officiis, quae,\n                      quibusdam\n                      ratione similique tenetur unde voluptate? A asperiores aspernatur at autem cum dolor impedit modi,\n                      nihil\n                      perferendis praesentium repudiandae soluta, unde, vero! Blanditiis doloremque expedita quas?\n                      Aliquid\n                      facere necessitatibus nihil nobis quam quasi rerum.\n                    </app-block>\n                  </l-stack-body>\n                  <l-stack-block>\n                    <app-block>\n                      <button>action</button>\n                    </app-block>\n                  </l-stack-block>\n                </l-stack>\n              </app-block>\n            </app-block>\n          </l-tile>\n\n          <l-tile>\n            <app-block>\n              <app-block>\n                <l-stack>\n                  <l-stack-body>\n                    <app-block>\n                      <ul>\n                        <li>Lorem ipsum dolor sit amet.</li>\n                        <li>Aspernatur fugiat iure necessitatibus voluptate.</li>\n                        <li>Alias impedit itaque quaerat repudiandae!</li>\n                        <li>Assumenda nemo quo recusandae voluptatibus!</li>\n                        <li>Aut culpa eaque expedita pariatur.</li>\n                      </ul>\n                    </app-block>\n                  </l-stack-body>\n                  <l-stack-block>\n                    <app-block>\n                      <button>action</button>\n                    </app-block>\n                  </l-stack-block>\n                </l-stack>\n              </app-block>\n            </app-block>\n          </l-tile>\n\n          <l-tile>\n            <app-block>\n              <app-block>\n                <l-stack>\n                  <l-stack-body>\n                    <app-block>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem ex harum illum ipsa ipsum\n                      laudantium omnis quod ullam voluptatibus. Cum ex impedit inventore iure molestiae odio suscipit.\n                      Aliquid\n                      asperiores autem, corporis dicta, dolores dolorum enim iusto labore laboriosam magni molestiae\n                      necessitatibus numquam officiis pariatur provident ratione reiciendis rem sapiente similique sint\n                      tempore\n                      tenetur ullam vero. Aperiam aspernatur atque beatae cum laborum modi natus officiis, quae,\n                      quibusdam\n                      ratione similique tenetur unde voluptate? A asperiores aspernatur at autem cum dolor impedit modi,\n                      nihil\n                      perferendis praesentium repudiandae soluta, unde, vero! Blanditiis doloremque expedita quas?\n                      Aliquid\n                      facere necessitatibus nihil nobis quam quasi rerum.\n                    </app-block>\n                  </l-stack-body>\n                  <l-stack-block>\n                    <app-block>\n                      <button>action</button>\n                    </app-block>\n                  </l-stack-block>\n                </l-stack>\n              </app-block>\n            </app-block>\n          </l-tile>\n\n          <l-tile>\n            <app-block>\n              <app-block>\n                <l-stack>\n                  <l-stack-body>\n                    <app-block>\n                      <img src=\"assets/images/ny.jpg\" alt=\"NY\"/>\n                    </app-block>\n                  </l-stack-body>\n                  <l-stack-block>\n                    <app-block>\n                      <button>action</button>\n                    </app-block>\n                  </l-stack-block>\n                </l-stack>\n              </app-block>\n            </app-block>\n          </l-tile>\n\n        </l-tiles>\n      </app-block>\n    </l-viewport>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/mocks/tiles-mock/tiles-mock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mocks/tiles-mock/tiles-mock.component.ts ***!
  \**********************************************************/
/*! exports provided: TilesMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesMockComponent", function() { return TilesMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TilesMockComponent = /** @class */ (function () {
    function TilesMockComponent() {
    }
    TilesMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tiles-mock',
            template: __webpack_require__(/*! ./tiles-mock.component.html */ "./src/app/mocks/tiles-mock/tiles-mock.component.html"),
            styles: [__webpack_require__(/*! ./tiles-mock.component.css */ "./src/app/mocks/tiles-mock/tiles-mock.component.css")]
        })
    ], TilesMockComponent);
    return TilesMockComponent;
}());



/***/ }),

/***/ "./src/app/mocks/viewport-mock/viewport-mock.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/mocks/viewport-mock/viewport-mock.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  min-height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy92aWV3cG9ydC1tb2NrL3ZpZXdwb3J0LW1vY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC9tb2Nrcy92aWV3cG9ydC1tb2NrL3ZpZXdwb3J0LW1vY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mocks/viewport-mock/viewport-mock.component.html":
/*!******************************************************************!*\
  !*** ./src/app/mocks/viewport-mock/viewport-mock.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack>\n  <l-stack-block>\n    <h1>\n      <app-block>\n        <app-block>\n          Viewport\n        </app-block>\n      </app-block>\n    </h1>\n    <hr>\n  </l-stack-block>\n  <l-stack-body>\n    <l-viewport>\n\n      <ul>\n        <li class=\"clickable\" *ngFor=\"let i of [].constructor(100); index as $index\">\n          <app-block>\n            <app-block>\n              Item #{{$index + 1}}\n            </app-block>\n          </app-block>\n        </li>\n      </ul>\n\n    </l-viewport>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/mocks/viewport-mock/viewport-mock.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/mocks/viewport-mock/viewport-mock.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewportMockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportMockComponent", function() { return ViewportMockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ViewportMockComponent = /** @class */ (function () {
    function ViewportMockComponent() {
    }
    ViewportMockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewport-mock',
            template: __webpack_require__(/*! ./viewport-mock.component.html */ "./src/app/mocks/viewport-mock/viewport-mock.component.html"),
            styles: [__webpack_require__(/*! ./viewport-mock.component.css */ "./src/app/mocks/viewport-mock/viewport-mock.component.css")]
        })
    ], ViewportMockComponent);
    return ViewportMockComponent;
}());



/***/ }),

/***/ "./src/app/services/route-title/route-title.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/route-title/route-title.service.ts ***!
  \*************************************************************/
/*! exports provided: RouteTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteTitleService", function() { return RouteTitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var RouteTitleService = /** @class */ (function () {
    function RouteTitleService(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this._defaultTitle = titleService.getTitle();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (route) { return route.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.title;
        })).subscribe(function (title) {
            titleService.setTitle(title || _this.defaultTitle);
        });
    }
    Object.defineProperty(RouteTitleService.prototype, "defaultTitle", {
        get: function () {
            return this._defaultTitle;
        },
        set: function (value) {
            this._defaultTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    RouteTitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], RouteTitleService);
    return RouteTitleService;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _route_title_route_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-title/route-title.service */ "./src/app/services/route-title/route-title.service.ts");




var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _route_title_route_title_service__WEBPACK_IMPORTED_MODULE_3__["RouteTitleService"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/zones/about-zone/about-zone.component.css":
/*!***********************************************************!*\
  !*** ./src/app/zones/about-zone/about-zone.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9leGFtcGxlL3NyYy9hcHAvem9uZXMvYWJvdXQtem9uZS9hYm91dC16b25lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/zones/about-zone/about-zone.component.html":
/*!************************************************************!*\
  !*** ./src/app/zones/about-zone/about-zone.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-zone works!\n</p>\n"

/***/ }),

/***/ "./src/app/zones/about-zone/about-zone.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/zones/about-zone/about-zone.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutZoneComponent", function() { return AboutZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AboutZoneComponent = /** @class */ (function () {
    function AboutZoneComponent() {
    }
    AboutZoneComponent.prototype.ngOnInit = function () {
    };
    AboutZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-zone',
            template: __webpack_require__(/*! ./about-zone.component.html */ "./src/app/zones/about-zone/about-zone.component.html"),
            styles: [__webpack_require__(/*! ./about-zone.component.css */ "./src/app/zones/about-zone/about-zone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutZoneComponent);
    return AboutZoneComponent;
}());



/***/ }),

/***/ "./src/app/zones/layouts-zone/layouts-zone.component.css":
/*!***************************************************************!*\
  !*** ./src/app/zones/layouts-zone/layouts-zone.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC96b25lcy9sYXlvdXRzLXpvbmUvbGF5b3V0cy16b25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtDQUNkIiwiZmlsZSI6InByb2plY3RzL2V4YW1wbGUvc3JjL2FwcC96b25lcy9sYXlvdXRzLXpvbmUvbGF5b3V0cy16b25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/zones/layouts-zone/layouts-zone.component.html":
/*!****************************************************************!*\
  !*** ./src/app/zones/layouts-zone/layouts-zone.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<l-stack direction=\"row\">\n  <l-stack-block>\n    <aside>\n      <l-viewport>\n        <nav>\n          <a routerLink=\"layers\" routerLinkActive=\"active\" class=\"clickable\">\n            <app-block>\n              <l-media>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-puzzle-piece\"></i>\n                  </app-block>\n                </l-media-action>\n                <l-media-details>\n                  <app-block>\n                    Layers\n                  </app-block>\n                </l-media-details>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-angle-right\"></i>\n                  </app-block>\n                </l-media-action>\n              </l-media>\n            </app-block>\n          </a>\n          <a routerLink=\"media\" routerLinkActive=\"active\" class=\"clickable\">\n            <app-block>\n              <l-media>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-puzzle-piece\"></i>\n                  </app-block>\n                </l-media-action>\n                <l-media-details>\n                  <app-block>\n                    Media\n                  </app-block>\n                </l-media-details>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-angle-right\"></i>\n                  </app-block>\n                </l-media-action>\n              </l-media>\n            </app-block>\n          </a>\n          <a routerLink=\"panel\" routerLinkActive=\"active\" class=\"clickable\">\n            <app-block>\n              <l-media>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-puzzle-piece\"></i>\n                  </app-block>\n                </l-media-action>\n                <l-media-details>\n                  <app-block>\n                    Panel\n                  </app-block>\n                </l-media-details>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-angle-right\"></i>\n                  </app-block>\n                </l-media-action>\n              </l-media>\n            </app-block>\n          </a>\n          <a routerLink=\"stack\" routerLinkActive=\"active\" class=\"clickable\">\n            <app-block>\n              <l-media>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-puzzle-piece\"></i>\n                  </app-block>\n                </l-media-action>\n                <l-media-details>\n                  <app-block>\n                    Stack\n                  </app-block>\n                </l-media-details>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-angle-right\"></i>\n                  </app-block>\n                </l-media-action>\n              </l-media>\n            </app-block>\n          </a>\n          <a routerLink=\"stage\" routerLinkActive=\"active\" class=\"clickable\">\n            <app-block>\n              <l-media>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-puzzle-piece\"></i>\n                  </app-block>\n                </l-media-action>\n                <l-media-details>\n                  <app-block>\n                    Stage\n                  </app-block>\n                </l-media-details>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-angle-right\"></i>\n                  </app-block>\n                </l-media-action>\n              </l-media>\n            </app-block>\n          </a>\n          <a routerLink=\"tiles\" routerLinkActive=\"active\" class=\"clickable\">\n            <app-block>\n              <l-media>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-puzzle-piece\"></i>\n                  </app-block>\n                </l-media-action>\n                <l-media-details>\n                  <app-block>\n                    Tiles\n                  </app-block>\n                </l-media-details>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-angle-right\"></i>\n                  </app-block>\n                </l-media-action>\n              </l-media>\n            </app-block>\n          </a>\n          <a routerLink=\"viewport\" routerLinkActive=\"active\" class=\"clickable\">\n            <app-block>\n              <l-media>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-puzzle-piece\"></i>\n                  </app-block>\n                </l-media-action>\n                <l-media-details>\n                  <app-block>\n                    Viewport\n                  </app-block>\n                </l-media-details>\n                <l-media-action>\n                  <app-block>\n                    <i class=\"fa fa-angle-right\"></i>\n                  </app-block>\n                </l-media-action>\n              </l-media>\n            </app-block>\n          </a>\n        </nav>\n      </l-viewport>\n    </aside>\n  </l-stack-block>\n  <l-stack-body>\n    <l-viewport>\n      <router-outlet></router-outlet>\n    </l-viewport>\n  </l-stack-body>\n</l-stack>\n"

/***/ }),

/***/ "./src/app/zones/layouts-zone/layouts-zone.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/zones/layouts-zone/layouts-zone.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutsZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsZoneComponent", function() { return LayoutsZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LayoutsZoneComponent = /** @class */ (function () {
    function LayoutsZoneComponent() {
    }
    LayoutsZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layouts-zone',
            template: __webpack_require__(/*! ./layouts-zone.component.html */ "./src/app/zones/layouts-zone/layouts-zone.component.html"),
            styles: [__webpack_require__(/*! ./layouts-zone.component.css */ "./src/app/zones/layouts-zone/layouts-zone.component.css")]
        })
    ], LayoutsZoneComponent);
    return LayoutsZoneComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/achugaev/ngry/layouts/projects/example/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map