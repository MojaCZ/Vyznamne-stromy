export class Strom {
  IDEX: number = 0;
  NAME: string = "";
  TYP_OBJ: string = "";
  DATIN: string = "";
  DATAK: string = "";
  DATVY: string = "";
  VLAST: string = "";
  EXURL: string = "";
  IDNAZ: string = "";
  PRIJEM: string = "";
  loadQuerry = (querry: any) => {
    console.log(this)
    this.IDEX = querry[0].IDEX;
    this.NAME = querry[0].NAME;
    this.TYP_OBJ = querry[0].TYP_OBJ;
    this.DATIN = querry[0].DATIN;
    this.DATAK = querry[0].DATAK;
    this.DATVY = querry[0].DATVY;
    this.VLAST = querry[0].VLAST;
    this.EXURL = querry[0].EXURL;
    this.IDNAZ = querry[0].IDNAZ;
    this.PRIJEM = querry[0].PRIJEM;
  }
}