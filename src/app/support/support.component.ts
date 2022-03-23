import { Component, OnInit, } from '@angular/core';
import { EmailValidator, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '@auth0/auth0-angular';
import { __values } from 'tslib';
/** Error when invalid control is dirty, touched, or submitted. */


export class MyErrorStateMatcher implements ErrorStateMatcher {


  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //condition true
    const isSubmitted = form && form.submitted;

    //false
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  correo: any = ""

  constructor(public auth: AuthService) {

  }
  ngOnInit(): void {
    this.auth.getUser().subscribe(resp => {
      this.correo = resp.email
    })
  }


  /*Form*/
  nombreFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  msgFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(15),
  ]);

  matcher = new MyErrorStateMatcher();

  limpiar() {
    this.nombreFormControl.reset()
    this.msgFormControl.reset()
  }
}
