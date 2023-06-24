"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptData = exports.encryptData = void 0;
// encryption.js
const crypto_1 = __importDefault(require("crypto"));
const config_1 = __importDefault(require("../config"));
const { secret_key, secret_iv, ecnryption_method } = config_1.default.security;
if (!secret_key || !secret_iv || !ecnryption_method) {
    throw new Error('secretKey, secretIV, and ecnryptionMethod are required');
}
// Generate secret hash with crypto to use for encryption
const key = crypto_1.default
    .createHash('sha512')
    .update(secret_key)
    .digest('hex')
    .substring(0, 32);
const encryptionIV = crypto_1.default
    .createHash('sha512')
    .update(secret_iv)
    .digest('hex')
    .substring(0, 16);
// Encrypt data
function encryptData(data) {
    const cipher = crypto_1.default.createCipheriv(ecnryption_method, key, encryptionIV);
    return Buffer.from(cipher.update(data, 'utf8', 'hex') + cipher.final('hex')).toString('base64'); // Encrypts data and converts to hex and base64
}
exports.encryptData = encryptData;
// Decrypt data
function decryptData(encryptedData) {
    const buff = Buffer.from(encryptedData, 'base64');
    const decipher = crypto_1.default.createDecipheriv(ecnryption_method, key, encryptionIV);
    return (decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
        decipher.final('utf8')); // Decrypts data and converts to utf8
}
exports.decryptData = decryptData;
