import { Component, OnInit, Inject } from '@angular/core';
import {Fornecedor} from './fornecedor/fornecedor.model';
import { Http } from '@angular/http';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: Object[] = [];


  constructor(@Inject(Http) http) {
    http.get('http://eattofit.azurewebsites.net/swagger/tables/fornecedor')
    .map( res => {
      return res.json();
    })
    .subscribe(fornecedores => {
      this.fornecedores = fornecedores;
      console.log('fornecedores: ' + this.fornecedores);
    });

   }

  ngOnInit() {
  }

}
