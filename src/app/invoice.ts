import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.html',
  styleUrls: ['./invoice.css'],
})
export class Invoice {
  company = {
    name: 'Hul Makara Mart',
    address: '2004 St, SenSok, Cambodia',
    message: 'Open 7/24\nThank you for your business!',
  };

  receipt = {
    date: new Date().toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }),
    items: [
      { name: 'Orange Juice', price: 33.15 },
      { name: 'Apples', price: 3.5 },
      { name: 'Tomato', price: 2.4 },
      { name: 'Fish', price: 0.9 },
      { name: 'Beef', price: 10.0 },
      { name: 'Onion', price: 1.25 },
      { name: 'Cheese', price: 3.4 },
    ],
    tax: 2.89,
    barcode: '123456778963578021',
  };

  get subtotal(): number {
    return parseFloat(
      this.receipt.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)
    );
  }

  get total(): number {
    return parseFloat((this.subtotal + this.receipt.tax).toFixed(2));
  }
}
