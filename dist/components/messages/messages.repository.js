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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const base_repository_1 = require("../core/base.repository");
const mongoose_2 = require("mongoose");
let MessagesRepository = class MessagesRepository extends base_repository_1.BaseRepository {
    constructor(messagesModel) {
        super(messagesModel);
    }
    findManyByChatId(chatId, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({ chat: chatId }).sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
        });
    }
    findManyByIds(ids, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({ _id: { $in: ids } }).sort({ createdAt: -1 }).skip(skip).limit(limit).exec();
        });
    }
    updateById(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate(id, payload, { new: true });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findById(id);
        });
    }
    findByIdAndUserId(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ _id: id, user: userId });
        });
    }
};
MessagesRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Message')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MessagesRepository);
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messages.repository.js.map