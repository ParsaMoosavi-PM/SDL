import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TabsPage } from '../tabs/tabs.page';
import { UserLogin } from '../interface/app.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderComponent, TabsPage]
})
export class LoginPageComponent  implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {}

  loginForm:FormGroup = this.fb.group({
    codeMeli: new FormControl('',Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required]))
  })

  user: UserLogin ={
    codeMeli: this.loginForm.controls['codeMeli'].value as string,
    password: this.loginForm.controls['password'].value as string
  }

  validation = {
    codeMeli:[{type:''}],
    password:[]
  }
}
