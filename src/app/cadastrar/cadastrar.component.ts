import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../Produto';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  produto: Produto;

  constructor(private database : DatabaseService) { }

  inicializarProduto() {
    this.produto = {
      name: "",
      price:0,
      vegan: true
    }
  }

  cadastrar() {
    this.database.cadastrarProduto(this.produto);
    this.inicializarProduto();
  }

  ngOnInit(): void {
    this.inicializarProduto();
  }

}
