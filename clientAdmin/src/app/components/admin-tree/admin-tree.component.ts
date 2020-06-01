import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadedTreesService } from 'src/app/services/loaded-trees.service';
import { TreeI, Tree, ClassificationSchema, ClassificationInterface } from '../../../../../lib/src';

// import { CommentI } from '../../../../../shared/tree.interface';

@Component({
  selector: 'app-admin-tree',
  templateUrl: './admin-tree.component.html',
  styleUrls: ['./admin-tree.component.scss']
})
export class AdminTreeComponent implements OnInit {
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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.treeId = params.id;
        this.tree = this.loadedTreesService.getTreeById(params.id);
        console.log(this.tree);
      }
    );

    this.baseFormGroup = this.formBuilder.group({
      lonControl: [''],
      latControl: [''],
      type: [''],
      rad: [''],
      celed: [''],
      rod: [''],
      podrod: ['']
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
