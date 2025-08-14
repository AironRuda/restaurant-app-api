import type { Request, Response, NextFunction } from 'express';
import { products, type Product } from '../models/product';
import prisma from '../db/client';

// Create an Product
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({
        message: 'Name, price, and description are required',
      });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        description,
      },
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// Read all Products
export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    next(error);
  }
};
