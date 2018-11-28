exports.id = "main";
exports.modules = {

/***/ "./src/components/chats/chats.controller.ts":
/*!**************************************************!*\
  !*** ./src/components/chats/chats.controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst chats_service_1 = __webpack_require__(/*! ./chats.service */ \"./src/components/chats/chats.service.ts\");\nconst user_decorator_1 = __webpack_require__(/*! ../../helpers/decorators/user.decorator */ \"./src/helpers/decorators/user.decorator.ts\");\nconst user_entity_1 = __webpack_require__(/*! ../users/user.entity */ \"./src/components/users/user.entity.ts\");\nconst create_chat_dto_1 = __webpack_require__(/*! ./dto/create-chat.dto */ \"./src/components/chats/dto/create-chat.dto.ts\");\nconst find_chats_list_dto_1 = __webpack_require__(/*! ./dto/find-chats-list.dto */ \"./src/components/chats/dto/find-chats-list.dto.ts\");\nlet ChatsController = class ChatsController {\n    constructor(chatsService) {\n        this.chatsService = chatsService;\n    }\n    findAll(user, query) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (query.ids) {\n                return yield this.chatsService.findManyByIds();\n            }\n            else {\n                return this.chatsService.findMany(user.id);\n            }\n        });\n    }\n    createOne(user, payload) {\n        return __awaiter(this, void 0, void 0, function* () {\n            payload.userIds.push(user.id);\n            return yield this.chatsService.createOne(payload);\n        });\n    }\n};\n__decorate([\n    common_1.Get(),\n    swagger_1.ApiOperation({ title: 'Get list of chats for particular user' }),\n    __param(0, user_decorator_1.ReqUser()), __param(1, common_1.Query()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [user_entity_1.User, find_chats_list_dto_1.FindChatsListDto]),\n    __metadata(\"design:returntype\", Promise)\n], ChatsController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Post(),\n    swagger_1.ApiOperation({ title: 'Get list of chats for particular user' }),\n    __param(0, user_decorator_1.ReqUser()), __param(1, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [user_entity_1.User, create_chat_dto_1.CreateChatDto]),\n    __metadata(\"design:returntype\", Promise)\n], ChatsController.prototype, \"createOne\", null);\nChatsController = __decorate([\n    common_1.Controller('chats'),\n    common_1.UseGuards(passport_1.AuthGuard('jwt')),\n    swagger_1.ApiUseTags('Chats'),\n    swagger_1.ApiBearerAuth(),\n    __metadata(\"design:paramtypes\", [chats_service_1.ChatsService])\n], ChatsController);\nexports.ChatsController = ChatsController;\n\n\n//# sourceURL=webpack:///./src/components/chats/chats.controller.ts?");

/***/ }),

/***/ "./src/components/chats/chats.module.ts":
/*!**********************************************!*\
  !*** ./src/components/chats/chats.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst chats_gateway_1 = __webpack_require__(/*! ./chats.gateway */ \"./src/components/chats/chats.gateway.ts\");\nconst chats_service_1 = __webpack_require__(/*! ./chats.service */ \"./src/components/chats/chats.service.ts\");\nconst chat_entity_1 = __webpack_require__(/*! ./chat.entity */ \"./src/components/chats/chat.entity.ts\");\nconst chats_controller_1 = __webpack_require__(/*! ./chats.controller */ \"./src/components/chats/chats.controller.ts\");\nconst messages_module_1 = __webpack_require__(/*! ../messages/messages.module */ \"./src/components/messages/messages.module.ts\");\nlet ChatsModule = class ChatsModule {\n};\nChatsModule = __decorate([\n    common_1.Module({\n        imports: [\n            messages_module_1.MessagesModule,\n            typeorm_1.TypeOrmModule.forFeature([chat_entity_1.Chat]),\n        ],\n        controllers: [chats_controller_1.ChatsController],\n        providers: [chats_gateway_1.ChatsGateway, chats_service_1.ChatsService],\n    })\n], ChatsModule);\nexports.ChatsModule = ChatsModule;\n\n\n//# sourceURL=webpack:///./src/components/chats/chats.module.ts?");

/***/ }),

/***/ "./src/components/chats/chats.service.ts":
/*!***********************************************!*\
  !*** ./src/components/chats/chats.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst chat_entity_1 = __webpack_require__(/*! ./chat.entity */ \"./src/components/chats/chat.entity.ts\");\nlet ChatsService = class ChatsService {\n    constructor(chatsRepository) {\n        this.chatsRepository = chatsRepository;\n    }\n    findMany(userId, query) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.chatsRepository.find({\n                where: {\n                    users: { id: userId },\n                },\n            });\n        });\n    }\n    buildQuery(query) {\n        const builder = this.chatsRepository.createQueryBuilder('chat');\n        if (query.userId) {\n            builder.innerJoin('user', 'users', 'user.id = :userId', { id: query.userId });\n        }\n        if (query.includeMessages) {\n            builder.innerJoin('user', 'users', 'user.id = :userId', { id: query.userId });\n        }\n        return builder;\n    }\n    findManyByIds(query) {\n        return __awaiter(this, void 0, void 0, function* () {\n        });\n    }\n    findManyWithPagination(payload) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const skip = (payload.page - 1) * payload.limit;\n            const queryBuilder = this.prepareBuilder(this.chatsRepository.createQueryBuilder('chat'), payload);\n            const totalCount = yield queryBuilder.getCount();\n            const data = yield queryBuilder.skip(skip).take(payload.limit).getMany();\n            return {\n                page: payload.page,\n                itemsPerPage: payload.limit,\n                totalCount,\n                data,\n            };\n        });\n    }\n    findOne(id, query) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const relations = [];\n            if (query.includeMessages) {\n                relations.push('messages');\n            }\n            if (query.includeUsers) {\n                relations.push('users');\n            }\n            return yield this.chatsRepository.findOne({\n                id,\n            }, { relations });\n        });\n    }\n    createOne(payload) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const chat = new chat_entity_1.Chat();\n            chat.name = payload.name;\n            chat.createdAt = new Date();\n            chat.users = payload.userIds.map(id => ({ id }));\n            return yield this.findOne(chat.id, { includeUsers: true });\n        });\n    }\n    updateOne(id, payload) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.chatsRepository.update(id, payload);\n            return yield this.chatsRepository.findOne(id);\n        });\n    }\n};\nChatsService = __decorate([\n    common_1.Injectable(),\n    __param(0, typeorm_1.InjectRepository(chat_entity_1.Chat)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], ChatsService);\nexports.ChatsService = ChatsService;\n\n\n//# sourceURL=webpack:///./src/components/chats/chats.service.ts?");

/***/ })

};