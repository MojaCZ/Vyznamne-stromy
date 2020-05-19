export interface StromI {
  IDEX: number;
  NAME: string;
  TYP_OBJ: string;
  DATIN: string;
  DATAK: string;
  DATVY: string;
  VLAST: string;
  EXURL: string;
  IDNAZ: string;
  PRIJEM: string;
}

export class Strom implements StromI {
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

  loadParams = (params: StromI) => {
    this.IDEX = params.IDEX;
    this.NAME = params.NAME;
    this.TYP_OBJ = params.TYP_OBJ;
    this.DATIN = params.DATIN;
    this.DATAK = params.DATAK;
    this.DATVY = params.DATVY;
    this.VLAST = params.VLAST;
    this.EXURL = params.EXURL;
    this.IDNAZ = params.IDNAZ;
    this.PRIJEM = params.PRIJEM;
  }

  getQuerry = () : string => {
    let querry: string = `INSERT INTO 
    strom (strom_id, IDEX, NAME, TYP_OBJ, DATIN, DATAK, DATVY, VLAST, EXURL, IDNAZ PRIJEM) 
    VALUES VALUES (NULL, ${this.IDEX}, ${this.NAME}, ${this.TYP_OBJ}, ${this.DATIN}, ${this.DATAK}, ${this.DATVY}, ${this.VLAST}, ${this.EXURL}, ${this.IDNAZ}, ${this.PRIJEM});`;
    return querry
  }

  _get = (): StromI => {
    return {
      "IDEX": this.IDEX,
      "NAME": this.NAME,
      "TYP_OBJ": this.TYP_OBJ,
      "DATIN": this.DATIN,
      "DATAK": this.DATAK,
      "DATVY": this.DATVY,
      "VLAST": this.VLAST,
      "EXURL": this.EXURL,
      "IDNAZ": this.IDNAZ,
      "PRIJEM": this.PRIJEM
    }
  }


}


// I SHOULD ADD TYPE CHECK, SOMETHING LIKE THIS:
// interface Test {
//   prop: number;
// }

// function isTest(arg: any): arg is Test {
//   return arg && arg.prop && typeof arg.prop == 'number';
// }
// Of course, the actual implementation of the isTest function is totally up to you, but the good part is that it's an actual function, which means it's testable.

// Now at runtime you would use isTest() to validate if an object respects an interface. At compile time typescript picks up on the guard and treats subsequent usage as expected, i.e.:

// let a:any = { prop: 5 };

// a.x; //ok because here a is of type any

// if (isTest(a)) {
//   a.x; //error because here a is of type Test
// }