import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobilePlan } from 'src/app/interfaces/mobile.interface';

@Component({
  selector: 'app-movil-detail',
  standalone: true,
  imports: [],
  templateUrl: './movil-detail.component.html',
  styleUrl: './movil-detail.component.css'
})
export class MovilDetailComponent {
  planName: string | null = null;
  planDetails: MobilePlan[] | undefined;

  private activatedRoute = inject(ActivatedRoute);
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.planName = this.activatedRoute.snapshot.paramMap.get('name');

    this.httpClient
      .get<any>('../../../../assets/json/movil-data.json')
      .subscribe((data) => {
        const plans = data.movil;
        this.planDetails = plans.find(
          (plan: MobilePlan) => plan.name === this.planName
        );
      });
  }
}
