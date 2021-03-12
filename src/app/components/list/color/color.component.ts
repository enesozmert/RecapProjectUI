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

}