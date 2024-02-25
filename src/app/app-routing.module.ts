import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenCatComponent } from './men-cat/men-cat.component';
import { WomenCatComponent } from './women-cat/women-cat.component';
import { BagComponent } from './bag/bag.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: '',pathMatch:'full', component: HomeComponent },
  { path: 'Home',component: HomeComponent },
  { path:'Men',component:MenCatComponent},
  { path:'Women',component:WomenCatComponent},
  { path:'Bag',component:BagComponent},
  { path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
