import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-fibra-movil',
  templateUrl: './fibra-movil.component.html',
  styleUrls: ['./fibra-movil.component.css']
})
export class FibraMovilComponent implements OnInit {
  fibraMovilData: any[];
  private httpClient = inject(HttpClient)
  constructor() {
    this.fibraMovilData = [];
  }
  ngOnInit(): void {
    this.httpClient.get<any>('../../../../assets/json/fibraMovil-data.json').subscribe(data => {
      this.fibraMovilData = data.fibra_movil
    })
  }
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';
}

