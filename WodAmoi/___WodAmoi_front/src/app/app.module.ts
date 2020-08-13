import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWodComponent } from './components/wod/add-wod/add-wod.component';
import { WodDetailsComponent } from './components/wod/wod-details/wod-details.component';
import { WodsListComponent } from './components/wod/wods-list/wods-list.component';
import { MvtsListComponent } from './components/mvt/mvts-list/mvts-list.component';
import { MvtDetailsComponent } from './components/mvt/mvt-details/mvt-details.component';
import { AddMvtComponent } from './components/mvt/add-mvt/add-mvt.component';
import { TrainingsListComponent } from './components/training/trainings-list/trainings-list.component';
import { AddTrainingComponent } from './components/training/add-training/add-training.component';
import { TrainingDetailsComponent } from './components/training/training-details/training-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddWodComponent,
    WodDetailsComponent,
    WodsListComponent,
    MvtsListComponent,
    MvtDetailsComponent,
    AddMvtComponent,
    TrainingsListComponent,
    AddTrainingComponent,
    TrainingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
