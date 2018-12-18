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
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const base_entity_1 = require("../core/base.entity");
const note_entity_1 = require("../notes/note.entity");
let Comment = class Comment extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Comment.prototype, "text", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "noteId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Comment.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => note_entity_1.Note),
    __metadata("design:type", note_entity_1.Note)
], Comment.prototype, "note", void 0);
Comment = __decorate([
    typeorm_1.Entity()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map