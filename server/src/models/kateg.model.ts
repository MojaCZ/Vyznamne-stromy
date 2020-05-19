export interface KategI {
  KATEG1: string;
  KATEG2: string;
  KATEG3: string;
  KATEG4: string;
  KATEG5: string;
}

export class Kateg implements KategI {
  KATEG1: string = "";
  KATEG2: string = "";
  KATEG3: string = "";
  KATEG4: string = "";
  KATEG5: string = "";
  loadQuerry = (querry: any) => {
    if (querry.length <= 0) { return }
    this.KATEG1 = querry[0].KATEG1;
    this.KATEG2 = querry[0].KATEG1;
    this.KATEG3 = querry[0].KATEG1;
    this.KATEG4 = querry[0].KATEG1;
    this.KATEG5 = querry[0].KATEG1;
  }

  getQuerry = (id: number) : string => {
    let querry: string = `INSERT INTO 
    kateg (strom_id, KATEG1, KATEG2, KATEG3, KATEG4, KATEG5) 
    VALUES (${id},${this.KATEG1}, ,${this.KATEG2},${this.KATEG3},${this.KATEG4},${this.KATEG5});`;
    return querry
  }

  loadParams = (K: KategI) => {
    this.KATEG1 = K.KATEG1;
    this.KATEG2 = K.KATEG2;
    this.KATEG3 = K.KATEG3;
    this.KATEG4 = K.KATEG4;
  }
  _get = (): KategI => {
    return {
      "KATEG1": this.KATEG1,
      "KATEG2": this.KATEG2,
      "KATEG3": this.KATEG3,
      "KATEG4": this.KATEG4,
      "KATEG5": this.KATEG5,
    }
  }
}