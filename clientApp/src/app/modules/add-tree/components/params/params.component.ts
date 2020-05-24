import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeTypes, TreeI } from '../../../../../../../lib/src';
import { AddTreeService } from '../../services/add-tree.service';

interface SelectInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})

export class ParamsComponent implements OnInit {
  configData: any;
  formGroup: FormGroup;
  selectedClass: string;
  T: TreeI;

  objectTypes: SelectInterface[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private addTreeService: AddTreeService) {
    this.T = addTreeService.T;
    this.T.S.DATIN = new Date();

    for (const type of TreeTypes) { // input select types
      this.objectTypes.push({ value: type, viewValue: type });
    }

  }

  ngOnInit() {
    this.getLocation();
    this.route.data.subscribe(data => this.configData = data.config);
    this.formGroup = this.formBuilder.group({
      lonCtrl: [this.T.L.LON],
      latCtrl: [this.T.L.LAT],
      typeCtrl: [this.T.S.TYP_OBJ, Validators.required],
      nameCtrl: [this.T.S.NAME],
      dateCtrl: [this.T.S.DATIN],
    });
  }


  /** get device location and set it in service */
  getLocation() {
    if (this.T.L.LAT !== '' || this.T.L.LON !== '') {
      return;
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude.toString();
        const lon = position.coords.longitude.toString();
        this.T.L = { LON: lon, LAT: lat };
      });
    } else {
      console.log('No support for geolocation');
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.T.L.LON = this.formGroup.get('lonCtrl').value;
      this.T.L.LAT = this.formGroup.get('latCtrl').value;
      this.T.S.TYP_OBJ = this.formGroup.get('typeCtrl').value;
      this.T.S.NAME = this.formGroup.get('nameCtrl').value;
      this.T.S.DATIN = this.formGroup.get('dateCtrl').value;
      this.router.navigate(['/kategorie/0']);
    }
  }
  // [routerLink]="['/kategorie', +kategorie+1]" routerLinkActive="active"


}
