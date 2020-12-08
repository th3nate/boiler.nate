import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterDataService} from './services/register-data.service';
import {IRegisterPayload} from './interfaces/register-payload.interface';

@Component({
  selector   : 'app-register',
  templateUrl: './register.component.html',
  styleUrls  : ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public hidePassword = true;

  constructor(private readonly registerDataService: RegisterDataService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name    : new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email   : new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }

  public async createNewUser(): Promise<void> {
    if (this.registerForm.valid) {
      const payload: IRegisterPayload = {
        name    : this.registerForm.controls.name.value,
        username: this.registerForm.controls.username.value,
        email   : this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value,
      };
      const createUserResponse = await this.registerDataService.createUser(payload);
      console.log(createUserResponse);
    }
  }
}
