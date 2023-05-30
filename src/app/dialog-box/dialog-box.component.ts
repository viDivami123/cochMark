import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { sideBarItems } from '../constants';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent  implements OnChanges {
  @Input() step = 1;
  @Input() DialogHeader = "Dashboard";
  public visiblity = "visible";
  public totalSidebarItems=sideBarItems.length;
@Output() emitStep = new EventEmitter();
public next(){
if(this.step<=sideBarItems.length){
  this.step=this.step+1;
  console.log(this.step);
  this.changeEmitStep(this.step);
}


}
public previous(){
  if(this.step>1){
    this.step=this.step-1;
    console.log(this.step);
    this.changeEmitStep(this.step);
  }


}
public dismiss(){
  this.visiblity = "hidden";
}
ngOnChanges(changes:SimpleChanges){
this.DialogHeader = sideBarItems[changes['step']['currentValue']-1]
}
public changeEmitStep(value:any){
  this.emitStep.emit(value)
}
}
