import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

    private apiUrl = environment.apiUrl
  
    constructor(private http: HttpClient) {}
  
    getAllOutputs(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/output/`);
    }
  
    // ✅ 2. Récupérer le nombre total de sorties d'articles
    getOutputCount(): Observable<{ count: number }> {
      return this.http.get<{ count: number }>(`${this.apiUrl}/output/count`);
    }
}
