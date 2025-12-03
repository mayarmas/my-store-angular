import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  addToCart(product: Product, quantity: number): void {
    const existing = this.items.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.items.find(i => i.product.id === productId);
    if (item) item.quantity = quantity;
  }

  removeItem(productId: number) {
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  clearCart() {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
}
