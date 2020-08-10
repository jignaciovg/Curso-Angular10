import { Component, OnInit } from '@angular/core';
//Importaciones para recoger parametros
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._route.params.forEach((params:Params)=>{
      this.parametro = params['page'];
      console.log(params);
    });
  }
  redireccion(){
    this._router.navigate(['/contacto','dato-enviado-true']);
  }
  redireccionAll($value){
    this._router.navigate([$value]);
  }
}
