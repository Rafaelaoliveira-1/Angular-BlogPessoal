import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){

    //Usado para verificar se o token está vazio para acessar a página inicio
    if(environment.token == ''){
      // alert ('Sua sessão expirou, faça o seu login novamente!')
       this.router.navigate(['/entrar'])
     }
 

  }

}
