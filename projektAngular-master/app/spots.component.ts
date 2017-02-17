import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Spot } from './spot';
import { SpotService } from './spot.service';

@Component({
  moduleId: module.id,
  selector: 'my-spots',
  templateUrl: 'spots.component.html',
  styleUrls: [ 'spots.component.css' ]
})
export class SpotsComponent implements OnInit {
  spots: Spot[];
  selectedSpot: Spot;
  data: Object;
  dataPost: Object;

  constructor(
    private router: Router,
    private spotService: SpotService,
    public http: Http) { }

  getSpots(): void {
    this.spotService.getSpots().then(spots => this.spots = spots);
  }

  ngOnInit(): void { this.getSpots(); }

  onSelect(spot: Spot): void { this.selectedSpot = spot; }

  makeRequestFromService(): void{
    this.spotService.makeRequest();
    this.data= this.spotService.getData();
  }

makePost(): void{
    this.spotService.makePost();
    this.dataPost= this.spotService.getDataPost();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSpot.id]);
  }
}
