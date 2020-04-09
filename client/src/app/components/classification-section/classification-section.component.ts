import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-classification-section',
  templateUrl: './classification-section.component.html',
  styleUrls: ['./classification-section.component.scss']
})
export class ClassificationSectionComponent implements OnInit {
  kategorie: number;
  data: any;

  // cData stends for classification data
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.kategorie = +params.get("kategorie")
    })
    this.route.data.subscribe(data => this.data = data.Kategorie);
  }

  click(){
  }
}
