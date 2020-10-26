import { CadastroUsuarioService } from './../cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';

/*importando route*/

import {Router } from '@angular/router'
import { Cadastro } from '../cadastroUsuario.model';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {
  
  cadastro: Cadastro = {  
    id: null,
    nome: '',
    senha: '',
    status: '',
    perfil:''
  }

  constructor(private cadastroUsuarioService: CadastroUsuarioService, private router: Router) { }

  ngOnInit(): void {
  }
  novoUsuario(): void{
    this.cadastroUsuarioService.create(this.cadastro).subscribe(() => {
      this.cadastroUsuarioService.showMessage('Cadastrado com Sucesso!')
      this.router.navigate(['/Cadastro'])
    })
  }
  cancelar(): void {
    this.router.navigate(['/Cadastro'])
  }

}
