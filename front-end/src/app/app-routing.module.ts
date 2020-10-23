import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/*importando views */
import { HomeComponent } from './views/home/home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "Cadastro",
  component: CadastroComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
