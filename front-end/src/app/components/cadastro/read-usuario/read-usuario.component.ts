import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService } from '../cadastro-usuario.service';
import { Cadastro } from '../cadastroUsuario.model';

@Component({
  selector: 'app-read-usuario',
  templateUrl: './read-usuario.component.html',
  styleUrls: ['./read-usuario.component.css']
})
export class ReadUsuarioComponent implements OnInit {

  cadastro: Cadastro[]

  constructor(private cadastroUsuarioService: CadastroUsuarioService) { }

  ngOnInit(): void {
    this.cadastroUsuarioService.read().subscribe(cadastro => {
      this.cadastro = cadastro
      console.log(cadastro)
    })
  }

}
