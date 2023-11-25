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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
const typeorm_1 = require("typeorm");
const driver_entity_1 = require("../../drivers/entities/driver.entity");
const ride_entity_1 = require("../../rides/entities/ride.entity");
let Vehicle = class Vehicle {
};
exports.Vehicle = Vehicle;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vehicle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Vehicle.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Vehicle.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Vehicle.prototype, "startPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Vehicle.prototype, "pricePerKm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Vehicle.prototype, "isAvailable", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ride_entity_1.Ride, (ride) => ride.vehicle),
    __metadata("design:type", Array)
], Vehicle.prototype, "rides", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => driver_entity_1.Driver, (driver) => driver.vehicles),
    __metadata("design:type", driver_entity_1.Driver)
], Vehicle.prototype, "driver", void 0);
exports.Vehicle = Vehicle = __decorate([
    (0, typeorm_1.Entity)()
], Vehicle);
//# sourceMappingURL=vehicle.entity.js.map