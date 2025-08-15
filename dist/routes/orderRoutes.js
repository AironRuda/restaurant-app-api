"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordersControllers_1 = require("../controllers/ordersControllers");
const router = (0, express_1.Router)();
router.get('/', ordersControllers_1.getOrders);
router.post('/', ordersControllers_1.createOrder);
exports.default = router;
