"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterController = void 0;
const common_1 = require("@nestjs/common");
const counter_service_1 = require("./counter.service");
let CounterController = class CounterController {
    constructor(service) {
        this.service = service;
    }
    async getAll() {
        const responses = await this.service.getAll();
        return `views: ${responses.views.length} | clicks: ${responses.clicks.length}`;
    }
    create(counter) {
        return this.service.create(counter);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CounterController.prototype, "getAll", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CounterController.prototype, "create", null);
CounterController = __decorate([
    common_1.Controller('counter'),
    __metadata("design:paramtypes", [counter_service_1.CounterService])
], CounterController);
exports.CounterController = CounterController;
//# sourceMappingURL=counter.controller.js.map