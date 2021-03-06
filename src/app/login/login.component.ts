import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup; 					
  submitted: boolean = false;									
  invalidLogin: boolean = false;									
									
  constructor(private formBuilder: FormBuilder, private router: Router ) { }									
									
  onSubmit(){									
    this.submitted = true;									
    if(this.loginForm.invalid){									
      return;									
    }									
    if(this.loginForm.controls.UserID.value =="12345" &&									
        this.loginForm.controls.password.value=="anu23799"){									
          localStorage.setItem("UserID",this.loginForm.controls.UserID.value);									
          this.router.navigate(['/home']);									
    }									
    else{									
      this.invalidLogin = true;									
    }									
  }									
									
  ngOnInit() {									
    									
									
    this.loginForm = this.formBuilder.group({									
  UserID: ['', Validators.required],									
      password: ['', Validators.required]									
    });									
									
  }									

}
