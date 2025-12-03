import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css'
})
export class ConfirmationComponent {
  customerName: string = 'Customer';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { name: string };
    if (state?.name) {
      this.customerName = state.name;
    }
  }
}
