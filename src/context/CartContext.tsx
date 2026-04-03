'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (name: string, price: number) => void;
  removeItem: (name: string) => void;
  updateQty: (name: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (name: string, price: number) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.name === name);
      if (exists) return prev.map((i) => i.name === name ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { name, price, quantity: 1 }];
    });
  };

  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  };

  const updateQty = (name: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => i.name === name ? { ...i, quantity: i.quantity + delta } : i)
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
