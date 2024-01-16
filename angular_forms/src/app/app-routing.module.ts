import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './shared/forms/forms.component';
import { PatientComponent } from './shared/patient/patient.component';

const routes: Routes = [

  {path:'forms',component:FormsComponent},
  
  {path:'patient',component:PatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
