import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CityCreateComponent } from './city-create/city-create.component';

export const routes: Routes = [
  { path: '', component: CityListComponent },
  { path: 'create', component: CityCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
