import { Injectable } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { NgxUiLoaderService } from "ngx-ui-loader";
@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestCount=0;

  constructor(private spinner: NgxUiLoaderService) { }

  busy(){
    this.busyRequestCount++; 
    this.spinner.start();
  }
  idle(){
    this.busyRequestCount--; 
    if(this.busyRequestCount<=0){
      this.busyRequestCount=0;
      this.spinner.stop();
    }
  }
}
