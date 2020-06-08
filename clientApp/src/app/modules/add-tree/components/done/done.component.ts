import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTreeService } from '../../services/add-tree.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})

export class DoneComponent implements OnInit {
  message: any;

  constructor(private route: ActivatedRoute, private router: Router, private addTreeService: AddTreeService) {
    this.message = addTreeService.message;
  }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.message = params.message;
      console.log(this.message);
    });
  }

}
