import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiberPlan } from 'src/app/interfaces/fibra.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibra-details',
  templateUrl: './fibra-detail.component.html',
  styleUrls: ['./fibra-detail.component.css']
})
export class FibraDetailsComponent implements OnInit {
  planName: string | null = null;
  planDetails: FiberPlan[] | undefined;

  private activatedRoute = inject(ActivatedRoute);
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    // Obtener el parámetro de la URL
    this.planName = this.activatedRoute.snapshot.paramMap.get('name');

    // Cargar datos del archivo JSON y buscar el plan por nombre
    this.httpClient.get<any>('../../../../assets/json/fibra-data.json').subscribe(data => {
      const plans = data.fibra;
      this.planDetails = plans.find((plan: FiberPlan) => plan.name === this.planName);
    });
  }
}
