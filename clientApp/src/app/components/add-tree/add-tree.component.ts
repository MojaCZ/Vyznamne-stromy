import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface SelectInterface {
  value: string;
  viewValue: string;
}

export class BotanicNames {
  public jehlicnate: SelectInterface[] = [];
  public listnate: SelectInterface[] = [];
  constructor(){}
  addLists(J: SelectInterface[], L: SelectInterface[]){
    this.jehlicnate = J;
    this.listnate = L;
  }
}

@Component({
  selector: 'app-add-tree',
  templateUrl: './add-tree.component.html',
  styleUrls: ['./add-tree.component.scss']
})
export class AddTreeComponent implements OnInit {
  configData: any;
  lat: number = 0;
  lon: number = 0;
  formGroup: FormGroup;
  selectedClass: string;

  objectTypes: SelectInterface[] = [
    { value: 'samostatně stojící', viewValue: 'samostatně stojící' },
    { value: 'skupina', viewValue: 'skupina' },
    { value: 'alej', viewValue: 'alej' },
    { value: 'stromořadí', viewValue: 'stromořadí' }
  ]
  botanicNames = new BotanicNames()

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getLocation()
    this.route.data.subscribe(data => this.configData = data.config);
    this.formGroup = this.formBuilder.group({
      lonCtrl: [0],
      latCtrl: [0],
      typeCtrl: ['', Validators.required],
      classCtrl: [''],
      botanicNameCtrl: ['']
    })
    this.getBotanicNames()
    this.onChanges()
  }

  onChanges(){
    this.formGroup.get('classCtrl').valueChanges.subscribe(val => {
      this.selectedClass = val
    });
  }

  getBotanicNames(){
    let jehlicnate = this.configData.class.jehličnatý
    let listnate = this.configData.class.listnatý
    let jehlicnateInterface: SelectInterface[] = [];
    let listnateInterface: SelectInterface[] = [];
    for(let i: number = 0; i<jehlicnate.length; i++){
      let item: SelectInterface = {value: jehlicnate[i], viewValue: jehlicnate[i]}
      jehlicnateInterface.push(item)
    }
    for(let i: number = 0; i<listnate.length; i++){
      let item: SelectInterface = {value: listnate[i], viewValue: listnate[i]}
      listnateInterface.push(item)
    }
    this.botanicNames.addLists(jehlicnateInterface, listnateInterface)
  }


  getLocation(): void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      });
    } else {
      console.log("No support for geolocation")
    }
  }


}
