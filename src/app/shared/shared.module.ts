import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgZorroImportsModule } from './ng-zorro-imports.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgZorroImportsModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
