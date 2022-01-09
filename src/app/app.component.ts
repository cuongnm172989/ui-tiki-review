import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PredictService } from "./predict.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tikiComment';
  name=""
  body: any;
  loadding= false;
  result : any;

  endPoint = 'http://0.0.0.0:8001/predict';

  constructor(private httpClient: HttpClient) {
  }

  foods: Food[] = [
    {value: 'bilstm', viewValue: 'BiLSMT'},
    {value: 'cnn', viewValue: 'CNN'},
    {value: 'hybrid', viewValue: 'Hybrid'},
  ]

  setValue(value: string){
    this.body = {
    "sentence": this.name,
    "model": value
    };
    console.log("body", this.body)
  }

  submit(){
    console.log("input:", this.body);
    this.loadDataTest(this.body);
  }
  cancel(){
    this.name= ""
  }
  loadDataTest(body: any) {
    body = JSON.stringify(body)
    console.log("body input: ", body)
    this.loadding = true;
    this.httpClient.post<any[]>(this.endPoint, body)
      .subscribe(data => {
        console.log("data:",data);
        this.loadding = false;
        this.result = data;
      });
    console.log("test service", typeof this.body);

  }
}
