import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Product } from 'src/app/core/product.model';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public visible: boolean;
  public productList: Product[] = [];

  constructor(
    private nzMessageService: NzMessageService, 
    private productService: ProductService
  ) {}


  ngOnInit(): void {
    const that = this;
    that.productService.getListProducts().snapshotChanges().subscribe(res => {
      that.productList = [];
      return res.map(res => {
        const productKey = res.key;
        const productToJson = res.payload.toJSON();
        that.productList.push({
          key: productKey + "",
          id: productToJson['id'],
          name: productToJson['name'],
          sku: productToJson['sku'],
          description: productToJson['description'],
          image: productToJson['image']
        });
      });
    });
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
