"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
exports.ORM_CONFIG = {
    type: 'postgres',
    host: index_1.DB_HOST,
    port: index_1.DB_PORT,
    username: index_1.DB_USER,
    password: index_1.DB_PASSWORD,
    database: index_1.DB_NAME,
    entities: [`${__dirname}/../../**/*.entity.ts`],
    logging: true,
    synchronize: true,
};
//# sourceMappingURL=orm.config.js.map