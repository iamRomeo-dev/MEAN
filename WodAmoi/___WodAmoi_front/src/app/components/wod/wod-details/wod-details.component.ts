import { Component, OnInit } from '@angular/core';
import { WodService } from 'src/app/services/wod.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wod-details',
  templateUrl: './wod-details.component.html',
  styleUrls: ['./wod-details.component.css']
})
export class WodDetailsComponent implements OnInit {
  currentWod = null;
  message = '';

  constructor(
    private wodService: WodService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getWod(this.route.snapshot.paramMap.get('id'));
  }

  getWod(id): void {
    this.wodService.get(id)
      .subscribe(
        data => {
          this.currentWod = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateWod(): void {
    this.wodService.update(this.currentWod.id, this.currentWod)
      .subscribe(
        response => {
          console.log(response);
            this.router.navigate(['/wods']);
        },
        error => {
          console.log(error);
        });
  }

  deleteWod(): void {
    var verif = prompt("Es-tu sûre?(Y or N)");
    if (verif.toUpperCase() === "Y" || 'YES') {
      this.wodService.delete(this.currentWod.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/wods']);
        },
        error => {
          console.log(error);
        });
    } else {
      this.router.navigate(['/wods']);
    }
  }
   
}
