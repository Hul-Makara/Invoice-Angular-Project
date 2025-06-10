import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Invoice } from './invoice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Invoice],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Invoice_Project';
}
