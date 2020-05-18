export interface OhroI {
  OHRO1: string;
  OHRO2: string;
  OHRO3: string;
  OHRO4: string;
  OHRO5: string;
}
export class Ohro implements OhroI {
  OHRO1: string = "";
  OHRO2: string = "";
  OHRO3: string = "";
  OHRO4: string = "";
  OHRO5: string = "";
  loadQuerry = (querry: any) => {
    if (querry.length <= 0) { return }
    this.OHRO1 = querry[0].OHRO1;
    this.OHRO2 = querry[0].OHRO2;
    this.OHRO3 = querry[0].OHRO3;
    this.OHRO4 = querry[0].OHRO4;
    this.OHRO5 = querry[0].OHRO5;
  }
}