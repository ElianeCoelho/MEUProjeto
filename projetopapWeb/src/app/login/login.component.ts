import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;
  
  constructor() { }

  ngOnInit() {
  }

  entrar(event) {
   // event.preventDefault();
    //console.log(this.login);

    // cria uma instância de Headers
    //let headers = new Headers();

    // Adiciona o tipo de conteúdo application/json
   // headers.append('Content-Type', 'application/json; charset=UTF-8');

    //this.http.post(this.url,
      //JSON.stringify(this.fornecedor), { headers: headers })
    //.subscribe(() => {
      //  this.fornecedor = new FornecedorComponent();
        //console.log('Cadastrado com sucesso!');
    }//);
  }


