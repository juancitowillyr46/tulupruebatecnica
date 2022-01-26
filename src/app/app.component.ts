import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tulupruebatecnica';

  constructor(private db: AngularFireDatabase) {

  }

  saveData(inputValue: string) {
    const ref = this.db.list('carts');
    ref.push(inputValue).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.log(error);
    }); 
  }
}
