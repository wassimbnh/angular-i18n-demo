import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products: any[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts()
  }
  
  getProducts() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        console.log(response)
        this.products = response;
        console.log(this.products)
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
