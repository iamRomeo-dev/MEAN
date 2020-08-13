import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.css']
})
export class TrainingsListComponent implements OnInit {

  trainys: any;
  currentTraining = null;
  currentIndex = -1;
  title = '';
  date = '';
  equipe = '';
  mouvements = '';
  description = '';

  

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.retrieveTraining();
  }

  retrieveTraining(): void {
    this.trainingService.getAll()
      .subscribe(
        data => {
          this.trainys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTraining();
    this.currentTraining = null;
    this.currentIndex = -1;
  }

  setActiveTraining(traini, index): void {
    this.currentTraining = traini;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.trainingService.findByTitle(this.title)
      .subscribe(
        data => {
          this.trainys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
