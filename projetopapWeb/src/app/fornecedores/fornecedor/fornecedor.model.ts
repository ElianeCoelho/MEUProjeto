export interface Fornecedor {
    
        // dados de contato
        id?: Int32Array;
        nomeRepresentante: string;
        razaoSocial: string;
        cpf_cnpj: string;
        telefone?: string;
        email?: string;
        senha: string;
        enderecoEmpresa?: string;
        numeroEmpresa?: Int32Array;
        bairroEmpresa?: string;
        cidadeEmpresa?: string;
        estado?: string;
        
    }