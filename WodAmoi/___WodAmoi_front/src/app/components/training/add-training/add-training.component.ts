import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  trainy = {
    title: '',
    date:'',
    equipe: '',
    mouvements: '',
    description: ''
  };
  submitted = false;

  constructor(private trainingService: TrainingService, private router: Router) { }

  ngOnInit(): void {
  }

  saveTraining(): void {
    const data = {
      title: this.trainy.title,
      date: this.trainy.date,
      equipe: this.trainy.equipe,
      mouvements: this.trainy.mouvements,
      description: this.trainy.description
    };

    this.trainingService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/trainings']);
        },
        error => {
          console.log(error);
        });
  }

  newTraining(): void {
    this.submitted = false;
    this.trainy = {
      title: '',
      date:'',
      equipe: '',
      mouvements: '',
      description: ''
    };
  }

}
