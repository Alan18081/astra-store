"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const mongoose_1 = require("@nestjs/mongoose");
const file_schema_1 = require("./file.schema");
const files_resolver_1 = require("./files.resolver");
const files_repository_1 = require("./files.repository");
let FilesModule = class FilesModule {
};
FilesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'File', schema: file_schema_1.FileSchema }]),
            common_1.MulterModule.register({
                dest: './upload',
            }),
        ],
        exports: [files_service_1.FilesService, common_1.MulterModule],
        providers: [files_service_1.FilesService, files_resolver_1.FilesResolver, files_repository_1.FilesRepository],
    })
], FilesModule);
exports.FilesModule = FilesModule;
//# sourceMappingURL=files.module.js.map