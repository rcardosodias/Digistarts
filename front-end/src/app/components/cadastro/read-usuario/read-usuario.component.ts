import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CadastroUsuarioService } from '../cadastro-usuario.service';
import { Cadastro } from '../cadastroUsuario.model';

@Component({
  selector: 'app-read-usuario',
  templateUrl: './read-usuario.component.html',
  styleUrls: ['./read-usuario.component.css']
})
export class ReadUsuarioComponent implements  OnInit {

cadastro: Cadastro[]
displayedColumns = ['id','nome','senha','acao']

  constructor(private cadastroUsuarioService: CadastroUsuarioService) { }

  ngOnInit(): void {
    this.cadastroUsuarioService.read().subscribe(cadastro => {
      this.cadastro = cadastro
    })
  }


}
