import { Component, OnInit, Input } from '@angular/core';

import {Fornecedor} from './fornecedor.model';


@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  @Input() fornecedorModel: Fornecedor;
  
    @Input() nomeRepresentante: string;
    @Input() razaoSocial: string;
    @Input() cpf_cnpj: string;
    @Input() telefone?: string;
    @Input() email?: string;
    @Input() senha: string;
    @Input() enderecoEmpresa?: string;
    @Input() numeroEmpresa?: Int32Array;
    @Input() bairroEmpresa?: string;
    @Input() cidadeEmpresa?: string;
    @Input() estado?: string;



  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log('Fornecedor: ' + this.nomeRepresentante);
  }
}
