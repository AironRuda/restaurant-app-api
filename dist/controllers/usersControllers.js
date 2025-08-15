"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.getUsers = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = __importDefault(require("../db/client"));
const createUser = async (req, res, next) => {
    try {
        const { name, email, role, password } = req.body;
        if (!name || !email || !role || !password) {
            return res.status(400).json({
                message: 'Name, email, role, and password are required',
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const newUser = await client_1.default.user.create({
            data: {
                name,
                email,
                role,
                passwordHash: hashedPassword,
            },
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error('Error: ', error);
        next(error);
    }
};
exports.createUser = createUser;
const getUsers = async (req, res, next) => {
    try {
        const users = await client_1.default.user.findMany();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
};
exports.getUsers = getUsers;
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Email and password are required' });
        }
        const user = await client_1.default.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, user.passwordHash);
        if (isValidPassword) {
            return res.status(200).json({
                message: 'Login successful',
                email: user.email,
                role: user.role,
                name: user.name,
            });
        }
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
