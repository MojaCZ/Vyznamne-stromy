import express from 'express';
import con from '../dbCon';
import { Observable, Observer } from 'rxjs';

class Lokal {
  LON: number = 0;
  LAT: number = 0;
  loadQuerry = (querry: any) => {
    if (querry.length <= 0) { return }
    this.LON = querry[0].LON;
    this.LAT = querry[0].LAT;
  }
}

class PisemneD {
  URL: string[] = [];
  loadQuerry = (querry: any) => { // 1:n
    if (querry.length <= 0) { return }
    for (let i: number = 0; i < querry.length; i++) {
      this.URL.push = querry[i].URL;
    }
  }
}


class ObrazoveD {
  URL: string[] = [];
  loadQuerry = (querry: any) => { // 1:n
    if (querry.length <= 0) { return }
    for (let i: number = 0; i < querry.length; i++) {
      this.URL.push = querry[i].URL;
    }
  }
}

class Kateg {
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
}

class Comment {
  COM_U: string = "";
  COM_A: string = "";
  loadQuerry = (querry: any) => {
    if (querry.length <= 0) { return }
    this.COM_U = querry[0].COM_U;
    this.COM_A = querry[0].COM_A;
  }
}

class Ohro {
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

class Strom {
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

class Tree {
  exist: boolean = false;
  S: Strom = new Strom()
  L: Lokal = new Lokal()
  PD: PisemneD = new PisemneD()
  OD: ObrazoveD = new ObrazoveD()
  K: Kateg = new Kateg()
  C: Comment = new Comment()
  O: Ohro = new Ohro()
  constructor(public strom_id: number) {
  }
}


const getTreeQuerry = (id: number): Observable<Tree> => {
  let T: Tree = new Tree(id)

  const observable: Observable<Tree> = Observable.create((observer: Observer<Tree>) => {
    con.query(`SELECT * FROM strom where strom_id=${id} LIMIT 0,1`, (err, querry) => {
      if (err) throw err;
      if (querry.length > 0) {
        T.exist = true;
        T.S.loadQuerry(querry);
        con.query(`SELECT * FROM lokal where strom_id=${id} LIMIT 0,1`, (errL, querryL) => {
          if (errL) throw errL;
          T.L.loadQuerry(querryL);
          con.query(`SELECT * FROM pisemne_d where strom_id=${id} LIMIT 0,1`, (errPD, querryPD) => {
            if (errPD) throw errPD;
            T.PD.loadQuerry(querryPD);
            con.query(`SELECT * FROM obrazove_d where strom_id=${id} LIMIT 0,1`, (errOD, querryOD) => {
              if (errOD) throw errOD;
              T.OD.loadQuerry(querryOD);
              con.query(`SELECT * FROM kateg where strom_id=${id} LIMIT 0,1`, (errK, querryK) => {
                if (errK) throw errK;
                T.K.loadQuerry(querryK);
                con.query(`SELECT * FROM comment where strom_id=${id} LIMIT 0,1`, (errC, querryC) => {
                  if (errC) throw errC;
                  T.C.loadQuerry(querryC);
                  con.query(`SELECT * FROM ohro where strom_id=${id} LIMIT 0,1`, (errO, querryO) => {
                    if (errO) throw errO;
                    T.O.loadQuerry(querryO);
                    observer.next(T);
                    observer.complete();
                  });
                });
              });
            });
          });
        });
      } else {
        observer.next(T);
        observer.complete();
      }
    })
  })
  return observable;
}

// const addTreeQuerry = (): Observable<Tree> => {
//   let T : Tree = new Tree();
//   const observable: Observable<Tree> = Observable.create((observable: Observer<Tree>) => {
//     let querry: string = ""
//     con.query()
//   })
// }

// getTree reaches database find out if tree exists, return true if it does 
// and return strom_id, strom, lokal, pisemneD, obrazoveD, kateg, comment, ohro
// if the id doesn't exists it return tree object in default values
// at frontend check if tree exists with property exist= boolean 
export function getTree(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id = req.body.id;
  const treeObservable = getTreeQuerry(id)
  treeObservable.subscribe(data => {
    console.log(data)
    res.status(200).json({
      exist: data.exist,
      strom_id: data.strom_id,
      strom: data.S,
      lokal: data.L,
      pisemneD: data.PD,
      obrazoveD: data.OD,
      kateg: data.K,
      comment: data.C,
      ohro: data.O
    })
  })
}


export function addTree(req: express.Request, res: express.Response, next: express.NextFunction) {
  con.query('SELECT * FROM test', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
    res.status(200).json({
      message: rows
    })
  });
}