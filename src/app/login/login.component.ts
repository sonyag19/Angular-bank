import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  accnum="account number please"
  acno=""
  pswd=""

  loginForm=this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    if(this.loginForm.valid){
      const result = this.ds.login(acno,pswd)
      if(result){
        alert("login successful")
        this.router.navigateByUrl("dashboard")
      }
    }
    else{
      alert("invalid form")
    }
    
  }


// login using template referencing variable


  // login(a:any,p:any){
  //   var acno=a.value
  //   console.log(acno)
  //   var pswd=p.value
  //   console.log(pswd)
    
  //   let database=this.database

  //   if(acno in database){
  //     if(pswd == database[acno]["password"]){
  //       alert("login successful")
  //     }
  //     else{
  //       alert("incorect password")
  //     }
  //   }
  //   else{
  //     alert("account does not exist")
  //   }
  // }
}
