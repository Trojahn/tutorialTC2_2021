import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../Produto';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.css']
})
export class PromocaoComponent implements OnInit {

  produtos : Produto[];

  constructor(private data : DatabaseService) { }

  getProdutos() {
    let temp = this.data.getProdutos().slice(0);
    temp.sort((a,b) => (a.price > b.price) ? 1 : -1);
    this.produtos = temp.slice(0,3);
  }

  ngOnInit(): void {
    this.getProdutos();
  }

}
