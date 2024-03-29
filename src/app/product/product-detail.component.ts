import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  errorMessage: string = '';

  

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  product?: IProduct ;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    if(id){
      this.getData(id);
      
    }
    
  }

  getData(id: number):void {
    this.productService.getProducts().subscribe({
      next: product => this.product = product.find(p => p.productId === id),
      error: err => this.errorMessage = err,

    });

  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
