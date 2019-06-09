import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produtos.service';
import { ProdutoDataService } from '../shared/produtos-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  produto: Observable<any>;

  constructor(private produtoService: ProdutoService, private produtoDataService: ProdutoDataService) { }

  ngOnInit() {
    this.produto = this.produtoService.getAll();
  }
}
