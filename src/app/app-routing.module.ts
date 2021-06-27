import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChanclaComponent } from './components/chancla/chancla.component';

const routes: Routes = [
  {path: "chanclas", component: ChanclaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
