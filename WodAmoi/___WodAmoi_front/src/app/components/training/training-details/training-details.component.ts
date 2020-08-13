import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  currentTraining = null;
  message = '';

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTraining(this.route.snapshot.paramMap.get('id'));
  }

  getTraining(id): void {
    this.trainingService.get(id)
      .subscribe(
        data => {
          this.currentTraining = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTraining(): void {
    this.trainingService.update(this.currentTraining.id, this.currentTraining)
      .subscribe(
        response => {
          console.log(response);
            this.router.navigate(['/trainings']);
        },
        error => {
          console.log(error);
        });
  }

  deleteTraining(): void {
    this.trainingService.delete(this.currentTraining.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/trainings']);
        },
        error => {
          console.log(error);
        });
  }
}
