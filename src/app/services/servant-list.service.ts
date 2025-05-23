import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Servant } from '../servant';

@Injectable({
  providedIn: 'root',
})
export class ServantListService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Servant[]> {
    return this.http.get<Servant[]>(`${this.apiUrl}/servants/all`).pipe(
      map((servant) =>
        servant.map((servant) => ({
          id: servant.id,
          name: servant.name,
          description: servant.description,
          price: servant.price,
          stock: servant.stock,
          image_url: servant.image_url,
          class: servant.class,
          created_at: servant.created_at,
          lore: servant.lore,
          skill: servant.skill,
          noble_phantasm: servant.noble_phantasm,
          star: servant.star,
        }))
      )
    );
  }

  getProductById(id: string): Observable<Servant> {
    return this.http.get<Servant>(`${this.apiUrl}/servants/id/${id}`).pipe(
      map((servant) => ({
        id: servant.id,
        name: servant.name,
        description: servant.description,
        price: servant.price,
        stock: servant.stock,
        image_url: servant.image_url,
        class: servant.class,
        created_at: servant.created_at,
        lore: servant.lore,
        skill: servant.skill,
        noble_phantasm: servant.noble_phantasm,
        star: servant.star,
      }))
    );
  }
}
