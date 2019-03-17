"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const note_schema_1 = require("./schemas/note.schema");
const notes_service_1 = require("./notes.service");
const core_module_1 = require("../core/core.module");
const auth_module_1 = require("../auth/auth.module");
const notes_resolver_1 = require("./resolvers/notes.resolver");
const notes_repository_1 = require("./notes.repository");
const comments_resolver_1 = require("./resolvers/comments.resolver");
const answers_resolver_1 = require("./resolvers/answers.resolver");
let NotesModule = class NotesModule {
};
NotesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Note', schema: note_schema_1.NoteSchema }]),
            core_module_1.CoreModule,
            auth_module_1.AuthModule,
        ],
        exports: [],
        providers: [
            notes_service_1.NotesService,
            notes_resolver_1.NotesResolver,
            comments_resolver_1.CommentsResolver,
            answers_resolver_1.AnswersResolver,
            notes_repository_1.NotesRepository
        ],
    })
], NotesModule);
exports.NotesModule = NotesModule;
//# sourceMappingURL=notes.module.js.map