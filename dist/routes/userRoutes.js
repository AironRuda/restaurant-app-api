"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
const router = (0, express_1.Router)();
router.get("/", usersControllers_1.getUsers);
router.post("/", usersControllers_1.createUser);
router.post("/login", usersControllers_1.login);
exports.default = router;
