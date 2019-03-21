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
const messages_repository_1 = require("./messages.repository");
const messages_enum_1 = require("../../helpers/enums/messages.enum");
let MessagesService = class MessagesService {
    constructor(messagesRepository) {
        this.messagesRepository = messagesRepository;
    }
    isMessageOwner(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messagesRepository.findByIdAndUserId(id, userId);
            if (!message) {
                throw new common_1.ForbiddenException(messages_enum_1.Messages.MESSAGE_NOT_FOUND_OR_WRONG_PERMISSIONS);
            }
            return message;
        });
    }
    findManyByChatId(chatId, skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.messagesRepository.findManyByChatId(chatId, skip, limit);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.messagesRepository.findById(id);
        });
    }
    createOne(userId, { text, chatId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMessage = {
                text,
                author: userId,
                chat: chatId,
                createdAt: new Date(),
            };
            return this.messagesRepository.save(newMessage);
        });
    }
    updateById(id, payload, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.isMessageOwner(id, userId);
            return this.messagesRepository.updateById(id, payload);
        });
    }
    deleteById(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.isMessageOwner(id, userId);
            yield this.messagesRepository.deleteById(id);
            return {
                _id: message._id,
                chatId: message.chat,
            };
        });
    }
};
MessagesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [messages_repository_1.MessagesRepository])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map