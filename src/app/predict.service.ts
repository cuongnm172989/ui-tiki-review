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

  body = JSON.stringify({
    "sentence": "Cuốn sách này như cẹc",
    "model": "bilstm"
});

  loadDataTest(body: any) {
    body = JSON.stringify(body)
    console.log("body input: ", body)
    this.httpClient.post<any[]>(this.endPoint, body)
      .subscribe(data => {
        console.log("data:",data);
      });
    console.log("test service", typeof this.body);
  }

  // loadData(body: string) {
  //   this.httpClient.post<any[]>(this.endPoint, body)
  //     .subscribe(data => {
  //       console.log("data:",data);
  //     });
  //   console.log("test service");
  // }


}
