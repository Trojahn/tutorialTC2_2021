import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  listaProdutos: Produto[];
  produtoSelecionado : Produto;

  selecionaProduto(produto: Produto): void {
    this.produtoSelecionado = produto;
  }

  carregarProdutos() : void {
    this.listaProdutos = this.servico.getProdutos();
  }

  constructor(private servico : DatabaseService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }
}
