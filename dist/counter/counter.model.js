"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterSchema = void 0;
const mongoose = require("mongoose");
exports.CounterSchema = new mongoose.Schema({
    created_at: { type: Date, required: true },
});
//# sourceMappingURL=counter.model.js.map