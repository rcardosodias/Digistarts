import { CadastroUsuarioService } from './../cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';

/*importando route*/

import {Router } from '@angular/router'

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private cadastroUsuarioService: CadastroUsuarioService, private router: Router) { }

  ngOnInit(): void {
  }
  novoUsuario(): void{
    this.cadastroUsuarioService.showMessage('Cadastrado com sucesso!')
  }
  cancelar(): void {
    this.router.navigate(['/Cadastro'])
  }

}
