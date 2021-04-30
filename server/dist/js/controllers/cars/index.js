"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.addCar = exports.getCars = void 0;
const car_1 = __importDefault(require("../../models/car"));
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield car_1.default.find();
        res.status(200).json({ cars: cars });
    }
    catch (error) {
        throw error;
    }
});
exports.getCars = getCars;
const addCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const car = new car_1.default({
            make: body.make,
            modelo: body.modelo,
            image: body.image,
            description: body.description,
            estimatedate: body.estimatedate,
            estimateperson: body.estimateperson,
            status: body.status,
        });
        const newCar = yield car.save();
        const allCars = yield car_1.default.find();
        res.status(201).json({ message: 'Car added', car: newCar, cars: allCars });
    }
    catch (error) {
        throw error;
    }
});
exports.addCar = addCar;
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateCar = yield car_1.default.findByIdAndUpdate({ _id: id }, body);
        const allCars = yield car_1.default.find();
        res.status(200).json({
            message: 'Car updated',
            car: updateCar,
            cars: allCars,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCar = updateCar;
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCar = yield car_1.default.findByIdAndRemove(req.params.id);
        const allCars = yield car_1.default.find();
        res.status(200).json({
            message: 'Car deleted',
            car: deletedCar,
            cars: allCars,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCar = deleteCar;
