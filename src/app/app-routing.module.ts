import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ResetSenhaComponent } from './component/reset-senha/reset-senha.component';
import { VerificacaoComponent } from './component/verificacao/verificacao.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-senha', component: ResetSenhaComponent },
  { path: 'usuario/verificacao/conta/:key', component: VerificacaoComponent },
  { path: 'usuario/verificacao/senha/:key', component: VerificacaoComponent },

  { path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
