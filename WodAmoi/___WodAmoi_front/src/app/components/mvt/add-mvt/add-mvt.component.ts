import { Component, OnInit } from '@angular/core';
import { MvtService } from 'src/app/services/mvt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-mvt',
  templateUrl: './add-mvt.component.html',
  styleUrls: ['./add-mvt.component.css']
})
export class AddMvtComponent implements OnInit {
  mouv = {
    title: '',
    date:'',
    poids: ''
  };
  submitted = false;

  constructor(private mvtService: MvtService, private router: Router) { }

  ngOnInit(): void {
  }

  saveMvt(): void {
    const data = {
      title: this.mouv.title,
      date: this.mouv.date,
      poids: this.mouv.poids
    };

    this.mvtService.create(data)
      .subscribe(
        response => {
          console.log(response);
         this.router.navigate(['/mvts']);
        },
        error => {
          console.log(error);
        });
  }

  newMvt(): void {
    this.submitted = false;
    this.mouv = {
      title: '',
      date:'',
      poids: ''
    };
  }

}
