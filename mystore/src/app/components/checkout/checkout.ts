import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class CheckoutComponent {
  name: string = '';
  address: string = '';
  card: string = '';

  constructor(private cart: CartService, private router: Router) {}

  submitForm() {
    if (this.name.trim().length < 3) {
      alert('Please enter a valid name (minimum 3 characters)');
      return;
    }

    if (this.address.trim().length < 5) {
      alert('Please enter a valid address');
      return;
    }

    if (this.card.trim().length < 12) {
      alert('Card number must be at least 12 digits');
      return;
    }

    this.cart.clearCart();

    this.router.navigate(['/confirmation'], {
      state: { name: this.name }
    });
  }
}
