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
const typeorm_1 = require("@nestjs/typeorm");
const user_hash_entity_1 = require("./user-hash.entity");
const typeorm_2 = require("typeorm");
const hash_service_1 = require("../core/services/hash.service");
let UserHashesService = class UserHashesService {
    constructor(userHashesRepository, hashService) {
        this.userHashesRepository = userHashesRepository;
        this.hashService = hashService;
    }
    findOneByHash(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userHashesRepository.findOne({ hash });
        });
    }
    createOne(userId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const userHash = new user_hash_entity_1.UserHash();
            userHash.hash = yield this.hashService.generateHash(JSON.stringify({ userId, type }));
            userHash.userId = userId;
            return yield this.userHashesRepository.save(userHash);
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userHashesRepository.delete({ id });
        });
    }
};
UserHashesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_hash_entity_1.UserHash)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        hash_service_1.HashService])
], UserHashesService);
exports.UserHashesService = UserHashesService;
//# sourceMappingURL=user-hashes.service.js.map