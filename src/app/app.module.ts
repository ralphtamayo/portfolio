import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnderConstructionPage } from './under-construction/under-construction.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "under-construction", component: UnderConstructionPage },
  { path: "**", redirectTo: "under-construction" }
];

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
