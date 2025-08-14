export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
  name: string;
}

export interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  createdAt: string;
}
