import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecapProjectUI';
  widthSide:number
  heightSide:number
  colMdClassSide:string="d-none ml-0"
  colMdClassMain:string="col-md-12"
  keyColMdClass:boolean=false
  public openNav():void{
    if (this.keyColMdClass==true) {
      this.keyColMdClass=false
      this.colMdClassSide="invisible d-none ml-0"
      this.colMdClassMain="col-md-12"
      this.heightSide=0
      this.widthSide=0
    }else{
      this.keyColMdClass=true
      this.colMdClassSide="col-md-3"
      this.colMdClassMain="col-md-9"
      this.heightSide=100
      this.widthSide=100
    }
  }
}
