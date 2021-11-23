import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch: 'full'},


  {path:'Inicio', component:InicioComponent},
  {path: 'Contacts', component:ContactsComponent}

  


  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
