import express from 'express';
import con from '../dbCon';
import { Observable, Observer } from 'rxjs';
// import { Tree } from '../../models/index';

export function DeleteTreeId(req: express.Request, res: express.Response, next: express.NextFunction) {
  const id = req.body.id;
  console.log(id)
  const querry = `DELETE FROM strom WHERE strom_id=${18}`;
  con.query(querry, (err, querry) => {
    if(err) {
      res.status(200).json({
        status: "err",
        message: "unable to find this id"
      })
    };
    res.status(200).json({
      status: "ok",
      message: id
    })
  })
}