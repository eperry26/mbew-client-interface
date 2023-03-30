import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataPoints {
  x: number,
  y: number
}

@Injectable({
  providedIn: 'root'
})
export class TremordataService {
  private endPoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  // httpHeader = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  getData(){
    return this.httpClient.get(this.endPoint+"/datapoints1")
  }

}
