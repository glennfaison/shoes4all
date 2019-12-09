import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-small',
  templateUrl: './product-card-small.component.html',
  styleUrls: ['./product-card-small.component.css']
})
export class ProductCardSmallComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() title: string;
  @Input() currentPrice: string;
  @Input() oldPrice: string;

  constructor() { }

  ngOnInit() {
  }

}
