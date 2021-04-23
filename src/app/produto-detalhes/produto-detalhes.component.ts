import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../Produto';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  @Input() produto : Produto;


  constructor() { }

  ngOnInit(): void {
  }

}
