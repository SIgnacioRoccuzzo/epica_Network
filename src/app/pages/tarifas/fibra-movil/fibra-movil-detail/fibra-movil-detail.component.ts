import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiberMobilePlan } from 'src/app/interfaces/fibra-movil.interface';

@Component({
  selector: 'app-fibra-movil-detail',
  standalone: true,
  imports: [],
  templateUrl: './fibra-movil-detail.component.html',
  styleUrl: './fibra-movil-detail.component.css'
})
export class FibraMovilDetailComponent {
  planName: string | null = null;
  planDetails: FiberMobilePlan[] | undefined;

  private activatedRoute = inject(ActivatedRoute);
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.planName = this.activatedRoute.snapshot.paramMap.get('name');

    this.httpClient
      .get<any>('../../../../assets/json/fibraMovil-data.json')
      .subscribe((data) => {
        const plans = data.fibraMovil;
        this.planDetails = plans.find(
          (plan: FiberMobilePlan) => plan.name === this.planName
        );
      });
  }
}
