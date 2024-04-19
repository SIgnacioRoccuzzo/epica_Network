import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-fibra',
  templateUrl: './fibra.component.html',
  styleUrls: ['./fibra.component.css']
})
export class FibraComponent implements OnInit {
  fibraData: any[];
  private httpClient = inject(HttpClient)
  constructor() {
    this.fibraData = [];
  }

  ngOnInit(): void {
    this.httpClient.get<any>('../../../../assets/json/fibra-data.json').subscribe(data => {
      this.fibraData = data.fibra
    })
  }
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';
}



