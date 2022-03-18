import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  mensajeError: string = "Usuario o Contraseña inválido"
  accionBoton: string = "Ok"
  loading: boolean = false

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    @Inject(DOCUMENT) public document: Document) {

    this.form = this.fb.group({
      user: ["", Validators.required],
      pw: ["", Validators.required]

    })
  }

  ngOnInit(): void {
  }

  ingresar() {


    console.log("exitoso")
    this.auth.loginWithRedirect()
    this.form.reset()
    this.router.navigate(['/calculadora'])

  }

  logout() {
    this.auth.logout({ returnTo: this.document.location.origin })
  }


}
