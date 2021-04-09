import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto : Produto = {
    name: "Shampoo Vegan Max",
    price: 2525.35,
    vegan: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}
