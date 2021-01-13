import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
              private router: Router,
              // @Inject('LOCALSTORAGE') private localStorage: any
              ) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.usersService.login(this.user).subscribe(({token}) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/']);
    });
  }

}
