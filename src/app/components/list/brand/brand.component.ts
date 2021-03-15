import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = []
  dataLoaded: boolean = false
  first = 0;
  rows = 10;
  constructor(private brandService: BrandService) { }
  ngOnInit(): void {
    this.getBrands()
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
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
    return this.brands ? this.first === (this.brands.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.brands ? this.first === 0 : true;
  }

}
