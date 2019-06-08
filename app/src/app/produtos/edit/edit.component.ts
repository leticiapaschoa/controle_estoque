import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../shared/produto';
import { ProdutoService } from '../shared/produtos.service';
import { ProdutoDataService } from '../shared/produtos-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  produto: Produto
  key: string = '';

  constructor(private produtoService: ProdutoService, private produtoDataService: ProdutoDataService) { }

  ngOnInit() {
    this.produto = new Produto();
    this.produtoDataService.currentProduto.subscribe(data => {
      if (data.produto && data.key) {
        this.produto = new Produto();
        this.produto.id = data.produto.id;
        this.produto.nome = data.produto.nome;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.produtoService.update(this.produto, this.key);
    } else {
      this.produtoService.insert(this.produto);
    }

    this.produto = new Produto();
  }
}