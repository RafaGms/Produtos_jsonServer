import { Produto } from '../components/produto/produto';
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class ProdutoService {

    constructor(private http: HttpClient) { }

    getProduto(): Observable<Produto[]> {
      let url = 'http://localhost:3000/produtos';

      return this.http.get<Produto[]>(url)
    }
  }   
