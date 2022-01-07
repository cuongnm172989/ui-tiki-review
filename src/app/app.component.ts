import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Random Forrest'},
    {value: 'pizza-1', viewValue: 'CNN'},
    {value: 'tacos-2', viewValue: 'LSTM'},
  ]

  submit(){
    console.log("input:", this.name)
  }
  cancel(){
    this.name= ""
  }
}
