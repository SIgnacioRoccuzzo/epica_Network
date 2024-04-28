import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tv-detail',
  standalone: true,
  imports: [],
  templateUrl: './tv-detail.component.html',
  styleUrl: './tv-detail.component.css'
})
export class TvDetailComponent {
  /*   planName: string | null = null;
    planDetails: TVPlan | undefined;
  
    private activatedRoute = inject(ActivatedRoute);
    private httpClient = inject(HttpClient);
  
    ngOnInit(): void {
      this.planName = this.activatedRoute.snapshot.paramMap.get('name');
  
      this.httpClient
        .get<any>('../../../../assets/json/tv-data.json')
        .subscribe((data) => {
          const plans = data.tv;
          this.planDetails = plans.find(
            (plan: TVPlan) => plan.name === this.planName
          );
        });
    } */
}
