import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signupForm?: FormGroup;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      emoji: ['']
    })
  }

  ngOnInit(): void {
  }

  public registerUser() {
    if (this.signupForm?.value) {
      this.userService.register(this.signupForm.value).subscribe((res) => console.log(res));
    }
  }

}
