import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TVPlan } from 'src/app/interfaces/tv.interface';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  planTv: TVPlan[];
  private httpClient = inject(HttpClient);
  private router = inject(Router)
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';

  constructor() {
    this.planTv = [];
  }
  ngOnInit(): void {
    this.httpClient.get<any>('../../../../assets/json/tv-data.json').subscribe(data => {
      this.planTv = data.tv
    })
  }
  navigateToDetail(name: string) {
    this.router.navigate(['/tv', name]); // Navega a la ruta parametrizada usando el nombre del plan
  }

}
