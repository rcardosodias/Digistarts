import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/*importando views */
import { HomeComponent } from './views/home/home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

import { AddUsuarioComponent } from './components/cadastro/add-usuario/add-usuario.component';
import { UpdateUsuarioComponent } from './components/cadastro/update-usuario/update-usuario.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "Cadastro",
  component: CadastroComponent
},{
  path: "cadastro/add-usuario",
  component: AddUsuarioComponent
},{
  path: "cadastro/update-usuario/:id",
  component: UpdateUsuarioComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
