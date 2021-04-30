"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    make: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    estimatedate: {
        type: String,
        required: false
    },
    estimateperson: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.model('Car', carSchema);
