import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadedTreesService } from 'src/app/services/loaded-trees.service';
import { TreeI, Tree, ClassificationSchema, ClassificationInterface } from '../../../../../lib/src';

// import { CommentI } from '../../../../../shared/tree.interface';

@Component({
  selector: 'app-edit-tree',
  templateUrl: './edit-tree.component.html',
  styleUrls: ['./edit-tree.component.scss']
})
export class EditTreeComponent implements OnInit {
  // @Input() date;
  tree: Tree;
  treeId: number;

  baseFormGroup: FormGroup;
  dangerFormGroup: FormGroup;
  categoryFormGroup: FormGroup;
  adminFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private loadedTreesService: LoadedTreesService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.treeId = params.id;
        this.loadedTreesService.getTreeById(params.id).subscribe((data: Tree) => {
          this.tree = data;
          console.log(this.tree);
          this.setFormParams(data);
        });
      }
      );
    this.initFormParams();

  }

  setFormParams(T: Tree) {
    this.baseFormGroup.setValue({
      lonCtrl: T.L.LON,
      latCtrl: T.L.LAT,
      typeCtrl: T.S.TYP_OBJ
    });
  }

  initFormParams(){
    this.baseFormGroup = this.formBuilder.group({
      lonCtrl: [''],
      latCtrl: [''],
      typeCtrl: [''],
    });
    this.dangerFormGroup = this.formBuilder.group({
      A: [''],
      B: [''],
      C: [''],
      D: [''],
      E: ['']
    });
    this.categoryFormGroup = this.formBuilder.group({

    });
    this.adminFormGroup = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
      files: ['']
    });
  }

}
