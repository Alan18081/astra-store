"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const hash_service_1 = require("./services/hash.service");
const email_sending_service_1 = require("./services/email-sending.service");
const email_templates_service_1 = require("./services/email-templates.service");
const clients_store_service_1 = require("./services/clients-store.service");
const exportedProviders = [
    hash_service_1.HashService,
    email_sending_service_1.EmailSendingService,
    email_templates_service_1.EmailTemplatesService,
    clients_store_service_1.ClientsStoreService,
];
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    common_1.Module({
        imports: [],
        exports: [...exportedProviders],
        controllers: [],
        providers: [...exportedProviders],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map