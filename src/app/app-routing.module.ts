import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellsListComponent } from './components/spells-list/spells-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/spells', pathMatch: 'full' },
  {path: 'spells', component: SpellsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
