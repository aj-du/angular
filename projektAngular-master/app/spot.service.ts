
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import { Spot } from './spot';
import { SPOTS } from './mock-spots';

@Injectable()
export class SpotService {
data: Object;
dataPost: Object;
//loading: boolean;


  constructor (public http: Http) {}
  getSpots(): Promise<Spot[]> {
    return Promise.resolve(SPOTS);
  }

  getSpot(id: number): Promise<Spot> {
    return this.getSpots()
               .then(spots => spots.find(spot => spot.id === id));
  }

  makeRequest(): void {
    this.http.get('http://137.74.116.6/rest/user?id=1').subscribe((res: Response) => {
    this.data = res.json();
    });
  }

makePost(): void {
var json = JSON.stringify({ 'firstName':"Alojzy",'lastName':"rest",'login':"AlojzyWyjatkowyLogin",'password':"password",'email':"email"});
let headers  = new Headers  ({'Content-Type': 'application/json'});
let options = new RequestOptions({headers: headers});
//var params = '?json='+json;
this.http.post('http://137.74.116.6/rest/adduser',json,  options).subscribe((res: Response) => {
 this.dataPost = res.json();
});
}

  getData(){
    return this.data;
  }

    getDataPost(){
    return this.dataPost;
  }
}

