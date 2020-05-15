import express from 'express';
import con from '../dbCon';
import {Observable} from 'rxjs';

class Tree {
  strom_id: number = 0;
  IDEX: number = 0;
  NAME: string ="";
  TYP_OBJ: string ="";
  DATIN: string="";
  DATAK: string="";
  DATVY: string="";
  VLAST: string="";
  EXURL: string="";
  IDNAZ: string="";
  PRIJEM: string = "";
}

const getTreeQuerry = (id: number) : Observable<Tree> => {
  let T: Tree = new Tree()
  con.query(`SELECT * FROM strom where strom_id=${id} LIMIT 0,1`, (err, querry) => {
    if (err) throw err;
    T.strom_id= id;
    T.IDEX= querry[0].IDEX;
    T.NAME= querry[0].NAME;
    T.TYP_OBJ= querry[0].TYP_OBJ;
    T.DATIN= querry[0].DATIN;
    T.DATAK= querry[0].DATAK;
    T.DATVY= querry[0].DATVY;
    T.VLAST= querry[0].VLAST;
    T.EXURL= querry[0].EXURL;
    T.IDNAZ= querry[0].IDNAZ;
    T.PRIJEM= querry[0].PRIJEM;
    // return T;
  });
  return Observable.create(observer => {
    observer.next(T);
    observer.complete();
  });
}  

export function getTree(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id = req.body.id;
  const tree = getTreeQuerry(id).subscribe
  res.status(200).json({
    strom: tree,
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