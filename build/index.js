"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //Transform our req.body to JSON
const PORT = 5000;
app.get('/pin', (_req, res) => {
    console.log('Someone tried to enter here.');
    res.send('---PING---');
});
app.listen(PORT, () => {
    console.log('We are in port 5000');
});
