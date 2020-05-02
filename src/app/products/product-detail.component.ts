import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }

  getProduct(id: number): void{
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }

}
