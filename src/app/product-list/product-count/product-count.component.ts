import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})

export class ProductCountComponent implements OnInit {
  @Input() productList: Product[];
  constructor() { }

  ngOnInit() {
  }

}
