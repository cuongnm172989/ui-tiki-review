import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  endPoint = 'http://0.0.0.0:8001/predict';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  loadData() {
    this.httpClient.get<any[]>(this.endPoint)
      .subscribe(data => {
        console.log("data:",data);
      });
    console.log("test service");
  }


}
