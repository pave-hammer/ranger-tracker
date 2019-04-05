import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellsListComponent } from './components/spells-list/spells-list.component'
import { AttacksListComponent } from './components/attacks-list/attacks-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/spells', pathMatch: 'full' },
  {path: 'spells', component: SpellsListComponent},
  {path: 'attacks', component: AttacksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
