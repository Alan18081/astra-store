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
const class_validator_1 = require("class-validator");
const pagination_dto_1 = require("../../core/dto/pagination.dto");
class FindNotesListDto extends pagination_dto_1.PaginationDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ArrayNotEmpty(),
    __metadata("design:type", Array)
], FindNotesListDto.prototype, "ids", void 0);
__decorate([
    class_validator_1.IsBooleanString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], FindNotesListDto.prototype, "includeFiles", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Boolean)
], FindNotesListDto.prototype, "userId", void 0);
exports.FindNotesListDto = FindNotesListDto;
//# sourceMappingURL=find-notes-list.dto.js.map