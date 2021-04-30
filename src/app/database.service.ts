import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import {listaProdutosCadastrados} from "./listaProdutos";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getProdutos() : Produto[] {
    return listaProdutosCadastrados;
  }

  cadastrarProduto(produto : Produto) {
    console.log(produto);
  }

}
