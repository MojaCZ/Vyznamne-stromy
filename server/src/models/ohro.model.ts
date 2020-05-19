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

  getQuerry = (id: number) : string => {
    let querry: string = `INSERT INTO 
    kateg (strom_id, OHRO1, OHRO2, OHRO3, OHRO4, OHRO5) 
    VALUES (${id},${this.OHRO1}, ,${this.OHRO2},${this.OHRO3},${this.OHRO4},${this.OHRO5});`;
    return querry
  }

  loadParams = (params: OhroI) => {
    this.OHRO1 = params.OHRO1;
    this.OHRO2 = params.OHRO2;
    this.OHRO3 = params.OHRO3;
    this.OHRO4 = params.OHRO4;
    this.OHRO5 = params.OHRO5;
  }

  _get = (): OhroI => {
    return {
      "OHRO1": this.OHRO1,
      "OHRO2": this.OHRO2,
      "OHRO3": this.OHRO3,
      "OHRO4": this.OHRO4,
      "OHRO5": this.OHRO5
    }
  }
}