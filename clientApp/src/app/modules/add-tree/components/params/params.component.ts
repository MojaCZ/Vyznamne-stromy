import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeTypes, TreeI } from '../../../../lib';
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

  imageFiles: File[] = [];

  objectTypes: SelectInterface[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addTreeService: AddTreeService) {
    this.imageFiles = this.addTreeService.imageFiles;
    this.T = addTreeService.T;
    this.T.S.DATIN = new Date();

    for (const type of TreeTypes) { // input select types
      this.objectTypes.push({ value: type, viewValue: type });
    }
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.configData = data.config);
    this.formGroup = this.formBuilder.group({
      lonCtrl: [this.T.L.LON],
      latCtrl: [this.T.L.LAT],
      typeCtrl: [this.T.S.TYP_OBJ, Validators.required],
      nameCtrl: [this.T.S.NAME],
      dateCtrl: [this.T.S.DATIN],
      commentCtrl: [this.T.C.COM_U, Validators.maxLength(150)],
    });
    this.getLocation();
  }

  /** get device location and set it in service */
  getLocation() {
    if (this.T.L.LAT !== '' || this.T.L.LON !== '') {
      return;
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude.toString();
        const lat = position.coords.latitude.toString();
        this.formGroup.controls.lonCtrl.setValue(lon);
        this.formGroup.controls.latCtrl.setValue(lat);
        this.T.L = { LON: lon, LAT: lat };
      });
    } else {
      console.log('No support for geolocation');
    }
  }

  /** on adding new image in input type=file */
  onFileSelected(event) {
    // TODO check if file has proper extention
    if (this.addTreeService.imageFiles.length <= this.addTreeService.maxImageN) {
      const file = (event.target as HTMLInputElement).files[0];
      this.addTreeService.imageFiles.push(file);
    } else {
      // TODO: throw warning to user
      console.log('max number of images!!');
    }
  }

  /** delete loaded image from array */
  deleteImage(name: string) {
    for (let i = 0; i < this.addTreeService.imageFiles.length; i++) {
      if (this.addTreeService.imageFiles[i].name === name) {
        this.addTreeService.imageFiles.splice(i, 1);
        return;
      }
    }
  }

  /** try to submit form
   * @param categ do I want to process categorization?
   */
  submit(categ: boolean) {
    if (this.formGroup.valid) {
      this.T.L.LON = this.formGroup.get('lonCtrl').value;
      this.T.L.LAT = this.formGroup.get('latCtrl').value;
      this.T.S.TYP_OBJ = this.formGroup.get('typeCtrl').value;
      this.T.S.NAME = this.formGroup.get('nameCtrl').value;
      this.T.S.DATIN = this.formGroup.get('dateCtrl').value;
      this.T.C.COM_U = this.formGroup.get('commentCtrl').value;
      if (categ) {  // process categorization
        this.router.navigate(['/kategorie/0']);
      } else {  // fast submit (skip categorization)
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
  }

}
