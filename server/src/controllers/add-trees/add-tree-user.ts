import express from 'express';
import con from '../../dbCon';
import { Observable, Observer } from 'rxjs';
import { Tree } from '../../models/index';

const addTreeQuerry = (tree: Tree) : Observable<number> => {
  // let 

}

export function AddTreeUser(req: express.Request, res: express.Response, next: express.NextFunction) {
  con.query('SELECT * FROM test', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
    res.status(200).json({
      message: rows
    })
  });
}

// const addTreeQuerry = (): Observable<Tree> => {
//   let T : Tree = new Tree();
//   const observable: Observable<Tree> = Observable.create((observable: Observer<Tree>) => {
//     let querry: string = ""
//     con.query()
//   })
// }