import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { PhysicianProfileComponent } from './physician-profile/physician-profile.component';


const routes: Routes = [
  { path: 'profile', component: PhysicianProfileComponent }
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
