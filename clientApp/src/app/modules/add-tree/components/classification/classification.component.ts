import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTreeService } from '../../services/add-tree.service';
import { ClassificationInterface } from '../../../../lib';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})

export class ClassificationComponent implements OnInit {
  kategorie: number;
  katData: string[];
  configData: ClassificationInterface;

  constructor(private route: ActivatedRoute, private router: Router, private addTreeService: AddTreeService) {
  }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.kategorie = params.kategorie;
      this.configData = this.addTreeService.ConfKData[this.kategorie];
    });
  }

  submit(){
    this.addTreeService.send()
    .subscribe((data: any) => {
      console.log(data);
      if (data.message.status === 'ok') {
        this.router.navigate(['/done']);
      } else {
        alert(`Vyskytla se chyba!, zpráva je: ${data.message.message}`);
      }
    });
  }

}
