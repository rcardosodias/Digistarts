import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroUsuarioService } from '../cadastro-usuario.service';
import { Cadastro } from '../cadastroUsuario.model';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {
  cadastro: Cadastro

  constructor(private cadastroService: CadastroUsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cadastroService.readById(id).subscribe(cadastro =>{
      this.cadastro = cadastro
    });
  }
  atualizarUsuario(): void{

  }
  cancelar(): void{
    this.router.navigate(['/Cadastro'])
  }
}
