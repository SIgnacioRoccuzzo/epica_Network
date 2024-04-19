import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  planTv: any[];
  private httpClient = inject(HttpClient);
  whatsappLink = 'tu_link_de_whatsapp';
  constructor() {
    this.planTv = [];
  }
  ngOnInit(): void {
    this.httpClient.get<any>('../../../../assets/json/tv-data.json').subscribe(data => {
      this.planTv = data.tv
    })
  }

}
