"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_module_1 = require("../users/users.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../../config");
const auth_service_1 = require("./auth.service");
const core_module_1 = require("../core/core.module");
const refresh_tokens_module_1 = require("../refresh-tokens/refresh-tokens.module");
const auth_resolver_1 = require("./auth.resolver");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secretOrPrivateKey: config_1.JWT_SECRET,
                signOptions: {
                    expiresIn: config_1.JWT_EXPIRES,
                },
            }),
            users_module_1.UsersModule,
            core_module_1.CoreModule,
            refresh_tokens_module_1.RefreshTokensModule,
        ],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule],
        providers: [
            auth_service_1.AuthService,
            auth_resolver_1.AuthResolver,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map