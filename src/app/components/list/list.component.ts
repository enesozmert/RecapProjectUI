import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  activeState: boolean[] = [];
  constructor() { }

  ngOnInit(): void {
    this.activeState = [false, false, false, false, false]
  }
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
}
