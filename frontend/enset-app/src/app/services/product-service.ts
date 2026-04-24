import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   //injecter le service http pour envoyer requete vers le backend
     constructor(private http : HttpClient ){}
     getAllProducts() : Observable<any> {//get/put/delete = retourne des objets observables
       return this.http.get("http://localhost:8083/products");
       }
    deleteProduct(product : any){ //sans utilser observable les metthodes par defaut envoie des obsercvables
      return this.http.delete("http://localhost:8083/products/"+product.id);

      }
          }
