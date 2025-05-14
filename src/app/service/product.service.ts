import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private apiUrl = environment.apiUrl
  
    constructor(private http: HttpClient) {}
  
    getAllProducts(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/produit/`);
    }
  
    // ✅ 2. Récupérer le nombre total d'utilisateurs
    getProductCount(): Observable<{ count: number }> {
      return this.http.get<{ count: number }>(`${this.apiUrl}/produit/count`);
    }
}
