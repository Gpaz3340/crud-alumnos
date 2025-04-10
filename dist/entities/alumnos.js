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
exports.alumnos = void 0;
const typeorm_1 = require("typeorm");
let alumnos = class alumnos {
    constructor() {
        this.id = 0; // Valor inicial en el constructor
        this.nombres = "";
        this.apellidos = "";
    }
};
exports.alumnos = alumnos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], alumnos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombres", nullable: false }),
    __metadata("design:type", String)
], alumnos.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], alumnos.prototype, "apellidos", void 0);
exports.alumnos = alumnos = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], alumnos);
