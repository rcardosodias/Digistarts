import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templeate/header/header.component';

import { AddUsuarioComponent } from './components/cadastro/add-usuario/add-usuario.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/templeate/nav/nav.component';
import { FooterComponent } from './components/templeate/footer/footer.component';

/*Material*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateUsuarioComponent } from './components/cadastro/update-usuario/update-usuario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/*modulo formulario*/

import { FormsModule } from '@angular/forms';


/*importando http*/

import { HttpClientModule } from '@angular/common/http';
import { ReadUsuarioComponent } from './components/cadastro/read-usuario/read-usuario.component';
import { ReadUsuario2Component } from './components/cadastro/read-usuario2/read-usuario2.component';
/*importando o schematcs*/
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CadastroComponent,
    AddUsuarioComponent,
    UpdateUsuarioComponent,
    ReadUsuarioComponent,
    ReadUsuario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
