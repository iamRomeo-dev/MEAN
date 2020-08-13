import { Component, OnInit } from '@angular/core';
import { WodService } from 'src/app/services/wod.service';

@Component({
  selector: 'app-wods-list',
  templateUrl: './wods-list.component.html',
  styleUrls: ['./wods-list.component.css']
})
export class WodsListComponent implements OnInit {

  woddis: any;
  currentWod = null;
  currentIndex = -1;
  title = '';
  date = '';
  categorie = '';
  niveau = '';
  description = '';

  

  constructor(private wodService: WodService) { }

  ngOnInit(): void {
    this.retrieveWod();
  }

  retrieveWod(): void {
    this.wodService.getAll()
      .subscribe(
        data => {
          this.woddis = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveWod();
    this.currentWod = null;
    this.currentIndex = -1;
  }

  setActiveWod(woddi, index): void {
    this.currentWod = woddi;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.wodService.findByTitle(this.title)
      .subscribe(
        data => {
          this.woddis = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
