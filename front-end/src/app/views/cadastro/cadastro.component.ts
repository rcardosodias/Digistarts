import { Component, OnInit } from '@angular/core';

/*importando o router*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
navegaCadastro(): void{
  this.router.navigate(['cadastro/add-usuario'])
}
}
