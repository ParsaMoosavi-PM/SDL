import { User } from './../interface/app.interface';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TabsPage } from '../tabs/tabs.page';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    HeaderComponent,
    TabsPage,
    ReactiveFormsModule,
  ],
})
export class SignUpPageComponent implements OnInit {
  constructor() {
    addIcons({ informationCircleOutline });
  }

  ngOnInit() {}

  userForm = new FormGroup({
    codeMeli: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(10),
        Validators.maxLength(10),
      ])
    ),
    userName: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
      ])
    ),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/),
      ])
    ),
    phoneNumber: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(11),
        Validators.maxLength(11),
      ])
    ),
  });
  validations = {
    userName: [
      { type: 'required', message: 'نام کاربری لازم است' },
      { type: 'minlength', message: 'حداقل باید 5 حرف باشد' },
      { type: 'maxlength', message: 'حداکثر باید 30 حرف باشد' },
      { type: 'pattern', message: 'فقط باید از حروف استفاده شود' },
      {
        type: 'usernameNotAvailable',
        message: 'Your username is already taken.',
      },
    ],
    codeMeli: [
      { type: 'required', message: 'کد ملی لازم است' },
      { type: 'minlength', message: 'کد ملی باید 10 رقم باشد' },
      { type: 'maxlength', message: 'کد ملی باید 10 رقم باشد' },
      { type: 'pattern', message: 'کد ملی فقط باید عدد باشد' },
      {
        type: 'usernameNotAvailable',
        message: 'Your username is already taken.',
      },
    ],
    password: [
      { type: 'required', message: 'رمز عبور را وارد کنید' },
      { type: 'minlength', message: 'رمز عبور حداقل باید 8 رقم باشد' },
      { type: 'pattern', message: 'ششش' },
    ],
    phoneNumber: [
      { type: 'required', message: 'شماره تلفن را وارد کنید' },
      { type: 'minlength', message: 'شماره تلفن باید 11 رقم باشد' },
      { type: 'maxlength', message: 'شماره تلفن باید 11 رقم باشد.' },
      { type: 'pattern', message: 'شماره تلفن فقط بایداز ارقام استفاده شود.' },
    ],
  };

  newUser: User = {
    id: 0,
    codeMeli: this.userForm.controls.codeMeli.value as string,
    userName: this.userForm.controls.userName.value as string,
    password: this.userForm.controls.password.value as string,
    phoneNumber: this.userForm.controls.phoneNumber.value as string,
  };
}
