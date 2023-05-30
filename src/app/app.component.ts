import { Component } from '@angular/core';
import { sideBarItems } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cochMark';
  public DialogHeaders = sideBarItems;
  
  public step = 1;

  public changeStep(value:any){
    this.step = value;

  }
}
