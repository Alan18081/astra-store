"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const refresh_tokens_service_1 = require("./refresh-tokens.service");
const refresh_token_entity_1 = require("./refresh-token.entity");
const config_1 = require("../../config");
let RefreshTokensModule = class RefreshTokensModule {
};
RefreshTokensModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([refresh_token_entity_1.RefreshToken]),
            jwt_1.JwtModule.register({
                secretOrPrivateKey: config_1.JWT_SECRET,
                signOptions: {
                    expiresIn: config_1.JWT_EXPIRES,
                },
            }),
        ],
        controllers: [],
        exports: [refresh_tokens_service_1.RefreshTokensService],
        providers: [refresh_tokens_service_1.RefreshTokensService]
    })
], RefreshTokensModule);
exports.RefreshTokensModule = RefreshTokensModule;
//# sourceMappingURL=refresh-tokens.module.js.map