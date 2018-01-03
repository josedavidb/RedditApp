import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*Arreglo que va a contener cada uno de los posts*/
  listaPosts:Object[];

  constructor(public navCtrl: NavController, private http:Http) {
    this.listaPosts = [];

    /*Hacemos una comunicacion http y una peticion get para extraer la informacion
    de la API de Reddit */
    http.get('https://www.reddit.com/r/gaming/.json')

    /*Convertimos lo que obtenemos en un objeto json*/
    .map((res:Response) => res.json())
    
    /*Usamos suscribe para manipular lo obtenido con el Observable y asi agarrar
    justo lo que necesitamos (cada post) e insertarlo en nuestro arreglo*/
    .subscribe(res =>
    res.data.children.forEach( post => this.listaPosts.push(post.data)));
  }

}
