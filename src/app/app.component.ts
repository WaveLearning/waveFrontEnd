import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';


@Component({
  selector: 'wave-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  user = {};
  
  constructor(private analytics: AnalyticsService) {

  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
