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
      { name: 'Orange Juice', price: 32.15 },
      { name: 'Apples', price: 3.5 },
      { name: 'Tomato', price: 2.4 },
      { name: 'Fish', price: 0.9 },
      { name: 'Beef', price: 10.0 },
      { name: 'Onion', price: 1.25 },
      { name: 'Cheese', price: 5.4 },
    ],
    tax: 2.89,
    total: 29.69,
    barcode: '123456778963578021',
  };

  get subtotal() {
    return this.receipt.items.reduce((sum, item) => sum + item.price, 0);
  }
  get itemsSum() {
    // List of item names to include in the sum
    const included = ['Orange Juice', 'Apples', 'Tomato', 'Fish', 'Beef'];
    return this.receipt.items
      .filter((item) => included.includes(item.name))
      .reduce((sum, item) => sum + item.price, 0);
  }
}
