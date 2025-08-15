"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.createProduct = void 0;
const client_1 = __importDefault(require("../db/client"));
// Create an Product
const createProduct = async (req, res, next) => {
    try {
        const { name, price, description } = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({
                message: 'Name, price, and description are required',
            });
        }
        const newProduct = await client_1.default.product.create({
            data: {
                name,
                price,
                description,
            },
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        next(error);
    }
};
exports.createProduct = createProduct;
// Read all Products
const getProducts = async (req, res, next) => {
    try {
        const products = await client_1.default.product.findMany();
        res.json(products);
    }
    catch (error) {
        next(error);
    }
};
exports.getProducts = getProducts;
