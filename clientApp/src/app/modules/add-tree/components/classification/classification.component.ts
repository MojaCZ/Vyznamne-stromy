import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTreeService } from '../../services/add-tree.service';
import { ClassificationInterface } from '../../../../../../../lib/src';
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})

export class ClassificationComponent implements OnInit {
  kategorie: number;
  katData: string[];
  configData: ClassificationInterface;

  // cData stends for classification data
  constructor(private route: ActivatedRoute, private router: Router, private addTreeService: AddTreeService) {
    if (this.kategorie < 0 || this.kategorie > 4) {
      console.log('not allowed route!!!');
      this.router.navigate(['/kategorie/0']);
    }
    this.kategorie = this.route.snapshot.params.kategorie;
    console.log('AddTreeService', addTreeService)
    this.configData = addTreeService.ConfKData[this.kategorie];
  }

  ngOnInit(): void {




  }

  loadKatData(data: string) {
    console.log(data.split(','));
  }
}
