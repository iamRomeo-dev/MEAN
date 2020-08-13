import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WodsListComponent } from './components/wod/wods-list/wods-list.component';
import { WodDetailsComponent } from './components/wod/wod-details/wod-details.component';
import { AddWodComponent } from './components/wod/add-wod/add-wod.component';
import { MvtsListComponent } from './components/mvt/mvts-list/mvts-list.component';
import { MvtDetailsComponent } from './components/mvt/mvt-details/mvt-details.component';
import { AddMvtComponent } from './components/mvt/add-mvt/add-mvt.component';
import { TrainingsListComponent } from './components/training/trainings-list/trainings-list.component';
import { AddTrainingComponent } from './components/training/add-training/add-training.component';
import { TrainingDetailsComponent } from './components/training/training-details/training-details.component';




const routes: Routes = [
  { path: '', redirectTo: 'wods', pathMatch: 'full' },
  { path: 'wods', component: WodsListComponent },
  { path: 'wods/:id', component: WodDetailsComponent },
  { path: 'add', component: AddWodComponent },
  { path: 'mvts', component: MvtsListComponent },
  { path: 'mvts/:id', component: MvtDetailsComponent },
  { path: 'addMvt', component: AddMvtComponent },
  { path: 'addTraining', component: AddTrainingComponent },
  { path: 'trainings', component: TrainingsListComponent },
  { path: 'trainings/:id', component: TrainingDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
