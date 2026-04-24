import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
@Component({
  selector: 'app-products',
    imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true
})
export class ProductsComponent {
  products : any;
  constructor(private productService : ProductService){
    }
  getAllProducts():void{
    ////this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe({
      next : resp => {
        this.products = resp ;
        },
      error : err => {
        console.log(err)
        }
        });
    }

  ngOnInit():void {
    //this.products = this.productService.getAllProducts();
    this.getAllProducts();

    }
  handeleDelete(product :any):void {
        let v = confirm('etes vous sure de vouloir supprimer ?');
        if(v==true){
           this.productService.deleteProduct(product).subscribe({
             next : resp => {
               this.getAllProducts();
            },
             error : err => {
               console.log(err)
               }
               });
           //this.products = this.productService.getAllProducts();

         }

}}
