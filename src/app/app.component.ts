import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practica2';
  public mostrar_lista=true;
  public lista_usuarios=['Mellanie', 'Juan', 'Pedro', 'Roger', 'Romina','Erick','Ana'];
  public mostrar_autor=false;
  public autor = "Arévalo, Cali, Matamoros";
  public texto_boton = "Ocultar lista";

  change():void{
    this.mostrar_lista = !this.mostrar_lista;

    if(this.mostrar_lista == false){
      this.texto_boton = "Mostrar lista";
    }else{
      this.texto_boton = "Ocultar lista";
    }
  }
  buscar() { 
    var hay_coincidencias = false;
    for(var i=0; i<this.lista_usuarios.length; i++){
      if(this.lista_usuarios[i] == this.autor){
        hay_coincidencias = true;
      }
    }
    if(hay_coincidencias==true){
      alert('Si hay coincidencias con la búsqueda');
    }else{
      alert('No hay coincidencias con la búsqueda');
    }
  }
}
