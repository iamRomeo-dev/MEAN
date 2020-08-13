import { Component, OnInit } from '@angular/core';
import { WodService } from 'src/app/services/wod.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-wod',
  templateUrl: './add-wod.component.html',
  styleUrls: ['./add-wod.component.css']
})
export class AddWodComponent implements OnInit {
  woddy = {
    title: '',
    date:'',
    categorie: '',
    niveau: '',
    description: ''
  };
  submitted = false;

  constructor(private wodService: WodService, private router: Router) { }

  ngOnInit(): void {
  }

  saveWod(): void {
    const data = {
      title: this.woddy.title,
      date: this.woddy.date,
      categorie: this.woddy.categorie,
      niveau: this.woddy.niveau,
      description: this.woddy.description
    };

    this.wodService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/wods']);
        },
        error => {
          console.log(error);
        });
  }

  newWod(): void {
    this.submitted = false;
    this.woddy = {
      title: '',
      date:'',
      categorie: '',
      niveau: '',
      description: ''
    };
  }

}
