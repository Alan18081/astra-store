exports.id = "main";
exports.modules = {

/***/ "./src/components/messages/messages.gateway.ts":
/*!*****************************************************!*\
  !*** ./src/components/messages/messages.gateway.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst websockets_1 = __webpack_require__(/*! @nestjs/websockets */ \"@nestjs/websockets\");\r\nconst actions = __webpack_require__(/*! ./messages.actions */ \"./src/components/messages/messages.actions.ts\");\r\nconst add_message_dto_1 = __webpack_require__(/*! ./dto/add-message.dto */ \"./src/components/messages/dto/add-message.dto.ts\");\r\nconst messages_service_1 = __webpack_require__(/*! ./messages.service */ \"./src/components/messages/messages.service.ts\");\r\nlet MessagesGateway = class MessagesGateway {\r\n    constructor(messagesService) {\r\n        this.messagesService = messagesService;\r\n    }\r\n    handleConnection(client) {\r\n        console.log('New');\r\n    }\r\n    onAttendUser(client, { chatId }) {\r\n        client.join(chatId);\r\n    }\r\n    onAddMessage(client, payload) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            this.server.to(payload.chatId).emit(actions.ADD_MESSAGE, { title: 'Response' });\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    websockets_1.WebSocketServer(),\r\n    __metadata(\"design:type\", Object)\r\n], MessagesGateway.prototype, \"server\", void 0);\r\n__decorate([\r\n    websockets_1.SubscribeMessage('ADD_USER'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, Object]),\r\n    __metadata(\"design:returntype\", void 0)\r\n], MessagesGateway.prototype, \"onAttendUser\", null);\r\n__decorate([\r\n    websockets_1.SubscribeMessage(actions.ADD_MESSAGE),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object, add_message_dto_1.AddMessageDto]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], MessagesGateway.prototype, \"onAddMessage\", null);\r\nMessagesGateway = __decorate([\r\n    websockets_1.WebSocketGateway({ namespace: 'messages' }),\r\n    __metadata(\"design:paramtypes\", [messages_service_1.MessagesService])\r\n], MessagesGateway);\r\nexports.MessagesGateway = MessagesGateway;\r\n\n\n//# sourceURL=webpack:///./src/components/messages/messages.gateway.ts?");

/***/ })

};