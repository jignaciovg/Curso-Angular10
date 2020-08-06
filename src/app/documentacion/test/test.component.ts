import { Component, OnInit } from '@angular/core';
/*Importacion de la clase EMPLEADO*/
import{Empleado} from '../empleado';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  /*Comando para crear este componente
  ng g c documentacion/test --skipTests=true*/
  public titulo = 'Componente de pruebas';

  public nombre:string = 'Ignacio Vaqueiro';
  public edad:number;
  public mayorDeEdad:boolean = true;

  public profesiones:Array<string> = ['Arquitecto','Programador','Veterinario'];
  public ArregloCombinado:Array<any> = [1,'Programador',true];

  cualquierValor:any;
  // variable con la clase Empleado
  public empleado:Empleado;
  // arreglo con la clase Empleado
  public trabajadores:Array<Empleado>

  /*El constructor ayuda a cargar las propiedades de la clase,
  como los llamados a un servicio o referencia a una clase, para utilizar nuestras
  variables es necesario el uso del 'this.'variable*/
  constructor() {
    console.log(this.profesiones);
    this.edad = 23;
    this.trabajadores = [
      new Empleado('Juan Hernandez',25,'Marketing','Masculino',true),
      new Empleado('Alejandra Alvarado',30,'Abogado','Femenino',false),
      new Empleado('Felipe Almeida',28,'Gastronomia','Masculino',true)
    ];
  }
  /*El metodo ngOnInit se ejecuta antes que el costructor*/
  ngOnInit(): void {
    this.holaMundo(this.nombre);
    /*Variables let o var*/
    var uno = 1;
    var dos = 2;
    if(uno == 1){
      /*el valor de LET afecta solamente a nivel de bloque*/
      let uno = 3;
      /*el valor de VAR afecta a toda variable que se llame igual */
      var dos = 4;
      console.log('Valores dentro del IF : '+'uno:'+uno+' dos:'+dos);
    }
    console.log('Valores afuera del IF : ' +'uno:'+uno+' dos:'+dos);

    //Creamos un nuevo empleado
    this.empleado = new Empleado('Juan Hernandez',25,'Marketing','Masculino',true);
    console.log(this.empleado);
    console.log(this.trabajadores);

  }

  holaMundo(nombre){
    alert('Hola ' + nombre + '!');
  }

}
