import { SearchEntity } from './../../models/entities/searchEntity';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  activeState: boolean[] = [];
  selectElements: SearchEntity[] = [{ id: 1, searchName: "car" }, { id: 2, searchName: "color" }, { id: 2, searchName: "brand" }]
  selectElement: SearchEntity;
  searchFilter:string;
  constructor() {
  }

  ngOnInit(): void {
    this.activeState = [false, false, false, false, false]

  }
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
  filterSend() {
    environment.searchFilterEnviroment = this.searchFilter;
    console.log(environment.searchFilterEnviroment)
  }
}
