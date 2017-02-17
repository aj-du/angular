import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Spot }         from './spot';
import { SpotService }  from './spot.service';
@Component({
  moduleId: module.id,
  selector: 'my-spot-detail',
  templateUrl: 'spot-detail.component.html',
  styleUrls: [ 'spot-detail.component.css' ]
})
export class SpotDetailComponent implements OnInit {
  spot: Spot;

  constructor(
    private spotService: SpotService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.spotService.getSpot(+params['id']))
      .subscribe(spot => this.spot = spot);
  }

  goBack(): void {
    this.location.back();
  }
}

