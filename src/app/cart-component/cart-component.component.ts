import { Component } from '@angular/core';
import { sideBarItems } from '../constants';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent {
public options = sideBarItems;
}
