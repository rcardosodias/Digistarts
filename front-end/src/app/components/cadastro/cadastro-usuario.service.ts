import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*Material*/
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

/*imporntando o modelo de usuario*/

import { Cadastro } from './cadastroUsuario.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  baseUrl = "http://localhost:3001/usuario"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  /*inserindo dados*/
  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }
  /*Ler os usuario*/
  read(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.baseUrl)
  }
  readById(id: string):Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadastro>(url)
  }
  update(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
    
  }
}
