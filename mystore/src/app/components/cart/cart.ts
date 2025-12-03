import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  constructor(public cart: CartService) {}

  updateQty(productId: number, newQty: number) {
    if (newQty < 1) return;
    this.cart.updateQuantity(productId, Number(newQty));
  }

  remove(productId: number) {
    this.cart.removeItem(productId);
  }

  total() {
    return this.cart.getTotal();
  }
}
