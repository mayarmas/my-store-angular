import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
}
