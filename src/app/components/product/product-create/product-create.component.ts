import { Product } from './../product.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name:'Produto de Teste',
    price: 125.50
  }
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  creaateProduct(): void {
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
      
    })


  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
