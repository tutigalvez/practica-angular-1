import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
 
})
export class EmpleadoComponent implements OnInit {
  
  nombre="Juan";
  apellido="Díaz";
  edad=18; // agregamos un modificador de acceso hacemos que solo se pueda acceder o leer desde este archivo
  empresa="Google";

 /*getEdad(){
   return this.edad; //devuelveme la edad de this(la clase:empleadoComponente)
 }
*/
  
  habilitacionCuadro=false; 

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setusuarioRegistrado(event:Event){
    //alert ("El usuario se acaba de resgistrar");
    //this.textoDeRegistro="El usuario se acaba de registrar";
   
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";

    }else{
      this.textoDeRegistro="No hay nadie registrado."
    }
 
  }


  constructor() { }

  ngOnInit(): void {
  }

}
