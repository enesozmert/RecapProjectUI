"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TerminalComponent = void 0;
var core_1 = require("@angular/core");
var terminal_1 = require("primeng/terminal");
var TerminalComponent = /** @class */ (function () {
    function TerminalComponent(terminalService) {
        var _this = this;
        this.terminalService = terminalService;
        this.terminalService.commandHandler.subscribe(function (command) {
            var response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            _this.terminalService.sendResponse(response);
        });
    }
    TerminalComponent.prototype.ngOnInit = function () {
    };
    TerminalComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TerminalComponent = __decorate([
        core_1.Component({
            selector: 'app-terminal',
            templateUrl: './terminal.component.html',
            styleUrls: ['./terminal.component.css'],
            providers: [terminal_1.TerminalService]
        })
    ], TerminalComponent);
    return TerminalComponent;
}());
exports.TerminalComponent = TerminalComponent;
