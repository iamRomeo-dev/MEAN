import { Component, OnInit } from '@angular/core';
import { MvtService } from 'src/app/services/mvt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mvt-details',
  templateUrl: './mvt-details.component.html',
  styleUrls: ['./mvt-details.component.css']
})
export class MvtDetailsComponent implements OnInit {
  currentMvt = null;
  message = '';

  constructor(
    private mvtService: MvtService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getMvt(this.route.snapshot.paramMap.get('id'));
  }

  getMvt(id): void {
    this.mvtService.get(id)
      .subscribe(
        data => {
          this.currentMvt = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateMvt(): void {
    this.mvtService.update(this.currentMvt.id, this.currentMvt)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/mvts']);
        },
        error => {
          console.log(error);
        });
  }

  deleteMvt(): void {
    var verif = prompt("Es-tu sûre?(Y or N)");
    if (verif.toUpperCase() === "Y" || 'YES') {
     this.mvtService.delete(this.currentMvt.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/mvts']);
        },
        error => {
          console.log(error);
        });
    } else {
      this.router.navigate(['/mvts']);
    }
  }

}

