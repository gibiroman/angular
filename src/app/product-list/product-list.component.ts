import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import { ProductService } from './product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[];
  search: string;
  blah: string;
  product: string;

  constructor(private productService: ProductService) {
    this.product = '';
  }

  handleChange(value: string) {
    this.search = value;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
