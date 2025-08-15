"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.createOrder = void 0;
const client_1 = __importDefault(require("../db/client"));
let orderIdCounter = 1;
const createOrder = async (req, res, next) => {
    try {
        const { items } = req.body;
        if (!items) {
            return res.status(400).json({
                message: 'Items are required',
            });
        }
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const newOrder = {
            id: orderIdCounter++,
            items,
            total,
            createdAt: new Date().toISOString(),
        };
        await client_1.default.order.create({
            data: {
                items,
                total,
                createdAt: new Date().toISOString(),
            },
        });
        res.status(201).json(newOrder);
    }
    catch (error) {
        next(error);
    }
};
exports.createOrder = createOrder;
const getOrders = async (req, res, next) => {
    try {
        const orders = await client_1.default.order.findMany();
        res.json(orders);
    }
    catch (error) {
        next(error);
    }
};
exports.getOrders = getOrders;
