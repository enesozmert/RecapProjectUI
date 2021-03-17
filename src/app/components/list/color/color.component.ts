import { ColorService } from './../../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = []
  dataLoaded: boolean = false
  currentColor: Color;
  currentColorClass: string;
  first = 0
  rows = 10
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }
  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
      this.dataLoaded = true
    })
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.colors ? this.first === (this.colors.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.colors ? this.first === 0 : true;
  }
  tdOnClikEvent(color: Color): void {
    this.currentColor = color
    console.log("tıkladın bre gafil" + " " + color.colorName)
  }
  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
