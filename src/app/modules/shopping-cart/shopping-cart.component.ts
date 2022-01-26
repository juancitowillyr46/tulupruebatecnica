import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hGutter = 16;
  vGutter = 16;
  count = 4;
  array = new Array(this.count);
  
  reGenerateArray(count: number): void {
    this.array = new Array(count);
  }

}
