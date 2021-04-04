import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  saveItem(name:string,value:string){
    localStorage.setItem(name,value)
  }
  get(name:string){
    localStorage.getItem(String(name));
  }
  clearItem(name:string){
    localStorage.removeItem(name);
  }
  clear(){
    localStorage.clear();
  }

}
