import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditTreeService } from '../../../services/edit-tree.service';
import { ClassificationInterface } from '../../../../../../lib/src';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})

export class ClassificationComponent implements OnInit {
  katData: string[];
  configData: ClassificationInterface[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editTreeService: EditTreeService
    ) {
  }

  ngOnInit(){
      this.configData = this.editTreeService.ConfKData;
  }

  submit(){
  }

}
