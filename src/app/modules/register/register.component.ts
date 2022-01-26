import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Register } from 'src/app/core/register.model';
import { RegisterService } from 'src/app/core/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private registerService: RegisterService,
    private nzMessageService: NzMessageService
  ) {}

  validateForm!: FormGroup;

  submitForm(): void {
    
    const that = this;
    const payload: Register = this.validateForm.value;
    delete that.validateForm.value['checkPassword'];
    if (that.validateForm.valid) {

      const response = that.registerService.registerUser(payload);
      response.then((snapshot) => {
        that.nzMessageService.info('El usuario fue registrado correctamente');
        that.validateForm.reset();
        that.router.navigate(['/shop']);
      }).catch((snapshot) => {
        that.nzMessageService.info('Hubo un problema con el registro');
      });

    }

  }

  changeConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstname: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.maxLength(8), Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

}
