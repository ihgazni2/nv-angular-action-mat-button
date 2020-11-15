import { Component, OnInit,Input,Output,EventEmitter,HostListener,HostBinding } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {Btn} from "nvbtn";

/*
     this is a super trick  for inherit mat-icon css
     <button mat-mini-fab style="display:none;">
*/
@Component({
  selector: 'action-mat-button',
  template: '<button mat-mini-fab style="display:none;"></button><ng-content></ng-content>',
})
export class ActionMatButtonComponent  extends MatButton implements OnInit {
    private _btn:any;
    @Input() id:string;
    @Input() action:string;
    @Input() disable_interval:any;
    @Input() callback:any;
    @Input() callback_params:any;
    @Output() listen = new EventEmitter<any>();
    @HostBinding('mydisabled') _mydisabled:boolean;
    @HostListener('mousedown') mousedown(eventData: Event) {if(!this._mydisabled ){this._btn.down()}}
    @HostListener('mouseup') mouseup(eventData: Event) {if(!this._mydisabled ) {this._btn.up()}}
    ngOnInit() {
       this.disable_interval = (this.disable_interval===undefined)?100:parseInt(this.disable_interval.toString())
       this._btn = new Btn(this.action,this._callback);
    }
    private _callback = (r)=> {
      r.id = this.id;
      if(this.callback !== undefined) {
          if(r.error === null) {
              this.callback(...this.callback_params);
          } else {

          }
      }
      this.listen.emit(r);
      this._mydisabled = true;
      let tmout = setTimeout(
        ()=> {
          this._mydisabled = false;
          clearTimeout(tmout);
          tmout=null
        },
        this.disable_interval
      )
    }

    public get_state() {
      return(this._btn)
    }
    public reset() {
      this._btn.reset()
    }
    
}
