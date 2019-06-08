import { Produto } from './../shared/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produtos.service';
import { Observable } from 'rxjs';
import { ProdutoDataService } from '../shared/produtos-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  produto: Observable<any>;

  constructor(private produtoService: ProdutoService, private produtoDataService: ProdutoDataService) { }

  ngOnInit() {
    this.produto = this.produtoService.getAll();
  }

  delete(key: string) {
    this.produtoService.delete(key);
  }

  edit(produto: Produto, key: string) {
    this.produtoDataService.changeProduto(produto, key);
  }
}