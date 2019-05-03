import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ] // aqui
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { } // e aqui

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas);

    this.ofertasService.getOfertas() // Promise
      .then(
        ( ofertas: Oferta[] ) => {
          this.ofertas = ofertas;

        })
      .catch(( param: any ) => {
        console.log(param);
      });
  }

}
