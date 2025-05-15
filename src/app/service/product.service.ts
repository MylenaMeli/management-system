import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';

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

      createProduit(produit: Product): Observable<any> {
    const token = localStorage.getItem('token'); // 🔐 Assure-toi que le token est bien stocké

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Envoi au backend avec le total inclus
    const payload = {
      name: produit.name,
      quantite: produit.quantite,
      cartons: produit.cartons,
      total: produit.total
    };

    return this.http.post<any>(`${this.apiUrl}/produit/create`, payload, { headers });
  }
  public delete(id: number) {
    const url = `${this.apiUrl}/produit/${id}`; // Utilisez les templates de chaînes pour construire l'URL
    return this.http.delete(url);
  }

  

}
