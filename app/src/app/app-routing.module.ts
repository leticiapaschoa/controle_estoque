import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { EditComponent } from './produtos/edit/edit.component';
import { ListComponent } from './produtos/list/list.component';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './produtos/estoque/estoque.component';


const routes: Routes = [
  { path: 'produtos', component: EditComponent }, 
  { path: 'estoque', component: EstoqueComponent },
 // {path: '', component: AppComponent} 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
