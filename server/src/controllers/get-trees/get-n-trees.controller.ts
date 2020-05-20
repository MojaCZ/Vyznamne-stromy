import express from 'express';
import con from '../../dbCon';
import { Observable, Observer } from 'rxjs';
import { Tree } from '../../models/index';

export function GetNTrees(req: express.Request, res: express.Response, next: express.NextFunction) {
  const start = req.body.start || 0;
  let n = req.body.n || 100;
  if (n > 500) {n=500};
  console.log(start, n)
  con.query(`SELECT * FROM strom LIMIT ${start},${n};`, (err, querry) => {
    if(err) {
      res.status(200).json({
        "status": 'err',
        "message": err.sqlMessage
      })
      console.log(err)
    }
    res.status(200).json({
      "status": 'ok',
      "message": querry
    })
  })
}