import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellsListComponent } from './components/spells-list/spells-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AbilityDataService } from './services/ability-data.service';
import { AttacksListComponent } from './components/attacks-list/attacks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellsListComponent,
    NavbarComponent,
    AttacksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AbilityDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
