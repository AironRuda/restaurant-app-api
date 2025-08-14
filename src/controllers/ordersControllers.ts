import { NextFunction, Request, Response } from 'express';
import { OrderItem } from '../models/order';
import prisma from '../db/client';

let orderIdCounter = 1;

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { items } = req.body;
    if (!items) {
      return res.status(400).json({
        message: 'Items are required',
      });
    }

    const total = items.reduce(
      (acc: number, item: OrderItem) => acc + item.price * item.quantity,
      0,
    );

    const newOrder = {
      id: orderIdCounter++,
      items,
      total,
      createdAt: new Date().toISOString(),
    };
    await prisma.order.create({
      data: {
        items,
        total,
        createdAt: new Date().toISOString(),
      },
    });
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};
