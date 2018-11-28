exports.id = "main";
exports.modules = {

/***/ "./src/components/chats/chat.entity.ts":
/*!*********************************************!*\
  !*** ./src/components/chats/chat.entity.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst base_entity_1 = __webpack_require__(/*! ../core/base.entity */ \"./src/components/core/base.entity.ts\");\nconst user_entity_1 = __webpack_require__(/*! ../users/user.entity */ \"./src/components/users/user.entity.ts\");\nconst message_entity_1 = __webpack_require__(/*! ../messages/message.entity */ \"./src/components/messages/message.entity.ts\");\nconst browser_1 = __webpack_require__(/*! typeorm/browser */ \"typeorm/browser\");\nlet Chat = class Chat extends base_entity_1.BaseEntity {\n};\n__decorate([\n    typeorm_1.Column('varchar'),\n    __metadata(\"design:type\", String)\n], Chat.prototype, \"name\", void 0);\n__decorate([\n    typeorm_1.ManyToMany(type => user_entity_1.User),\n    browser_1.JoinTable(),\n    __metadata(\"design:type\", Array)\n], Chat.prototype, \"users\", void 0);\n__decorate([\n    typeorm_1.OneToMany(type => message_entity_1.Message, message => message.chat),\n    __metadata(\"design:type\", Array)\n], Chat.prototype, \"messages\", void 0);\nChat = __decorate([\n    typeorm_1.Entity()\n], Chat);\nexports.Chat = Chat;\n\n\n//# sourceURL=webpack:///./src/components/chats/chat.entity.ts?");

/***/ }),

/***/ "./src/components/chats/chats.controller.ts":
/*!**************************************************!*\
  !*** ./src/components/chats/chats.controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst chats_service_1 = __webpack_require__(/*! ./chats.service */ \"./src/components/chats/chats.service.ts\");\nconst user_decorator_1 = __webpack_require__(/*! ../../helpers/decorators/user.decorator */ \"./src/helpers/decorators/user.decorator.ts\");\nconst user_entity_1 = __webpack_require__(/*! ../users/user.entity */ \"./src/components/users/user.entity.ts\");\nconst create_chat_dto_1 = __webpack_require__(/*! ./dto/create-chat.dto */ \"./src/components/chats/dto/create-chat.dto.ts\");\nlet ChatsController = class ChatsController {\n    constructor(chatsService) {\n        this.chatsService = chatsService;\n    }\n    findAll(user) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.chatsService.findMany(user.id);\n        });\n    }\n    createOne(user, payload) {\n        return __awaiter(this, void 0, void 0, function* () {\n            payload.userIds.push(user.id);\n            return yield this.chatsService.createOne(payload);\n        });\n    }\n};\n__decorate([\n    common_1.Get(),\n    swagger_1.ApiOperation({ title: 'Get list of chats for particular user' }),\n    __param(0, user_decorator_1.ReqUser()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [user_entity_1.User]),\n    __metadata(\"design:returntype\", Promise)\n], ChatsController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Post(),\n    swagger_1.ApiOperation({ title: 'Get list of chats for particular user' }),\n    __param(0, user_decorator_1.ReqUser()), __param(1, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [user_entity_1.User, create_chat_dto_1.CreateChatDto]),\n    __metadata(\"design:returntype\", Promise)\n], ChatsController.prototype, \"createOne\", null);\nChatsController = __decorate([\n    common_1.Controller('chats'),\n    common_1.UseGuards(passport_1.AuthGuard('jwt')),\n    swagger_1.ApiUseTags('Chats'),\n    swagger_1.ApiBearerAuth(),\n    __metadata(\"design:paramtypes\", [chats_service_1.ChatsService])\n], ChatsController);\nexports.ChatsController = ChatsController;\n\n\n//# sourceURL=webpack:///./src/components/chats/chats.controller.ts?");

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

/***/ "typeorm/browser":
/*!**********************************!*\
  !*** external "typeorm/browser" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typeorm/browser\");\n\n//# sourceURL=webpack:///external_%22typeorm/browser%22?");

/***/ })

};