import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Login } from 'src/app/core/login.model';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public validateForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private loginService: LoginService,
    private nzMessageService: NzMessageService
  ) { 
    
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  submitForm(): void {
    const that = this;
    const response = that.loginService.validateLogin(this.validateForm.value);
    response.then((snapshot) => {

      const valueObject: Login = snapshot.toJSON();

      if(!valueObject) {
        that.nzMessageService.info('El usuario no existe');
      } else if(valueObject && valueObject[0].password != this.validateForm.value['password']){
        that.nzMessageService.info('La contraseña es incorrecta');
      } else {
        that.router.navigate(['/shop']);
      }

    }).catch((error) => {
      console.error(error);
      that.nzMessageService.info('Hubo un problema con la petición');
    });
  }

}
