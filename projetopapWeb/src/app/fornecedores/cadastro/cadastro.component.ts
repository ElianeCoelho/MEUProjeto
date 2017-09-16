import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FornecedorComponent } from '../fornecedor/fornecedor.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  fornecedor: FornecedorComponent = new FornecedorComponent();
  http: Http;
 
  private url: string = 'http://eattofit.azurewebsites.net/swagger/tables/fornecedor';
  
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  cadastrar(event) {
    event.preventDefault();
    console.log(this.fornecedor);

    // cria uma instância de Headers
    let headers = new Headers();

    // Adiciona o tipo de conteúdo application/json
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    this.http.post(this.url,
      JSON.stringify(this.fornecedor), { headers: headers })
    .subscribe(() => {
        this.fornecedor = new FornecedorComponent();
        console.log('Cadastrado com sucesso!');
    });
  }
}
