import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mensaje: string = ""

  formulario = new FormGroup
    ({
      opciones: new FormControl("", [Validators.required]),
      nombre: new FormControl("", [Validators.required, Validators.minLength(4)]),
      correo: new FormControl("", [Validators.required, Validators.email]),
      mensaje: new FormControl("")
    })

  opciones: string[] = [
    "Precio", "Servicios", "Empleo", "Otros"
  ]

  constructor() { }

  ngOnInit(): void { }


  limpiar() {
    this.formulario.reset()
  }

}
