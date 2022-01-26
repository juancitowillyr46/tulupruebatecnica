import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMarks } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public visible: boolean;

  constructor(private nzMessageService: NzMessageService) {}


  ngOnInit(): void {
  }

  hGutter = 16;
  vGutter = 16;
  count = 4;
  array = new Array(this.count);
  
  reGenerateArray(count: number): void {
    this.array = new Array(count);
  }

  // Modal carrito
  openCart(): void {
    const that = this;
    that.visible = true;
  }

  closeCart(): void {
    const that = this;
    that.visible = false;
  }

  // Confirmacion de Pago
  payConfirm(): void {
    const that = this;
    that.nzMessageService.info('click confirm');
  }

  payCancel(): void {
    const that = this;
    that.nzMessageService.info('click cancel');
  }

  // Eliminacion de Items
  deleteItemCart(): void {
    const that = this;
    that.nzMessageService.info('Producto eliminado');
  }

}
