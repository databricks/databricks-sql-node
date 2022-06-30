"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBSQLClient = exports.HiveUtils = exports.HiveDriver = exports.HiveClient = exports.thrift = exports.connections = exports.auth = void 0;
var TCLIService = require('../thrift/gen-nodejs/TCLIService');
var TCLIService_types = require('../thrift/gen-nodejs/TCLIService_types');
var DBSQLClient_1 = __importDefault(require("./DBSQLClient"));
exports.DBSQLClient = DBSQLClient_1.default;
var HiveClient_1 = __importDefault(require("./HiveClient"));
var HiveDriver_1 = __importDefault(require("./hive/HiveDriver"));
var HiveUtils_1 = __importDefault(require("./utils/HiveUtils"));
var NoSaslAuthentication_1 = __importDefault(require("./connection/auth/NoSaslAuthentication"));
var PlainHttpAuthentication_1 = __importDefault(require("./connection/auth/PlainHttpAuthentication"));
var HttpConnection_1 = __importDefault(require("./connection/connections/HttpConnection"));
exports.auth = {
    NoSaslAuthentication: NoSaslAuthentication_1.default,
    PlainHttpAuthentication: PlainHttpAuthentication_1.default,
};
exports.connections = {
    HttpConnection: HttpConnection_1.default,
};
exports.thrift = {
    TCLIService: TCLIService,
    TCLIService_types: TCLIService_types
};
var HiveClient = /** @class */ (function (_super) {
    __extends(HiveClient, _super);
    function HiveClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HiveClient;
}(HiveClient_1.default));
exports.HiveClient = HiveClient;
var HiveDriver = /** @class */ (function (_super) {
    __extends(HiveDriver, _super);
    function HiveDriver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HiveDriver;
}(HiveDriver_1.default));
exports.HiveDriver = HiveDriver;
var HiveUtils = /** @class */ (function (_super) {
    __extends(HiveUtils, _super);
    function HiveUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HiveUtils;
}(HiveUtils_1.default));
exports.HiveUtils = HiveUtils;
//# sourceMappingURL=index.js.map