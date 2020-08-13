import { Component, OnInit } from '@angular/core';
import { MvtService } from 'src/app/services/mvt.service';

@Component({
  selector: 'app-mvts-list',
  templateUrl: './mvts-list.component.html',
  styleUrls: ['./mvts-list.component.css']
})
export class MvtsListComponent implements OnInit {

  mouvs: any;
  currentMvt = null;
  currentIndex = -1;
  title = '';
  date = '';
  poids = '';

  constructor(private mvtService: MvtService) { }

  ngOnInit(): void {
    this.retrieveMvt();
  }

  retrieveMvt(): void {
    this.mvtService.getAll()
      .subscribe(
        data => {
          this.mouvs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveMvt();
    this.currentMvt = null;
    this.currentIndex = -1;
  }

  setActiveMvt(mouv, index): void {
    this.currentMvt = mouv;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.mvtService.findByTitle(this.title)
      .subscribe(
        data => {
          this.mouvs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}

