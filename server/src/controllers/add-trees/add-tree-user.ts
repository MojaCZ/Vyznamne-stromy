import express from 'express';
import con from '../../dbCon';
import { Observable, Observer } from 'rxjs';
import { Tree, StromI, CommentI, LokalI, PisemneDI, ObrazoveDI, KategI, OhroI, PisemneD } from '../../models/index';

export function AddTreeUser(req: express.Request, res: express.Response, next: express.NextFunction) {
  const T: Tree = new Tree()
  const strom: StromI = req.body.strom;
  const lokal: LokalI = req.body.lokal;
  const pisemneD: PisemneDI = req.body.pisemneD;
  const obrazoveD: ObrazoveDI = req.body.obrazoveD;
  const kateg: KategI = req.body.kateg;
  const comment: CommentI = req.body.comment;
  const ohro: OhroI = req.body.ohro;
  T.loadTree(strom, lokal, pisemneD, obrazoveD, kateg, comment, ohro)
  
  // = req.body.strom;
  T.printTree()
  res.status(200).json({
          id: 123
        })
  // const L: LokalI = req.body.Lokal;
  // const PD: PisemneDI = req.body.PisemneD;
  // const OD: ObrazoveDI = req.body.ObrazoveD;
  // const K: KategI = req.body.Kateg;
  // const C: CommentI = req.body.Comment;
  // const O: OhroI = req.body.Ohro;

  // const treeObservable = getTreeQuerry(id)
  // treeObservable.subscribe(data => {
  //   console.log(data)
  //   res.status(200).json({
  //     exist: data.exist,
  //     strom_id: data.strom_id,
  //     strom: data.S,
  //     lokal: data.L,
  //     pisemneD: data.PD,
  //     obrazoveD: data.OD,
  //     kateg: data.K,
  //     comment: data.C,
  //     ohro: data.O
  //   })
  // })
}

// const addTreeQuerry = (tree: Tree) : Observable<number> => {
//   // let 

// }

// export function AddTreeUser() {
    
//   res.status(200).json({
//       id: 123
//     })
//   con.query('SELECT * FROM test', (err, rows) => {
//     if (err) throw err;

//     console.log('Data received from Db:');
//     console.log(rows);
//     res.status(200).json({
//       message: rows
//     })
//   });
// }

// const addTreeQuerry = (): Observable<Tree> => {
//   let T : Tree = new Tree();
//   const observable: Observable<Tree> = Observable.create((observable: Observer<Tree>) => {
//     let querry: string = ""
//     con.query()
//   })
// }