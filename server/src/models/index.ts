import { Strom, StromI } from './strom.model'
import { Comment, CommentI } from './comment.model'
import { Lokal, LokalI } from './lokal.model'
import { PisemneD, PisemneDI } from './pisemne-d.model'
import { ObrazoveD, ObrazoveDI } from './obrazove-d.model'
import { Kateg, KategI } from './kateg.model'
import { Ohro, OhroI } from './ohro.model';
export * from './strom.model'
export * from './comment.model'
export * from './lokal.model'
export * from './pisemne-d.model'
export * from './obrazove-d.model'
export * from './kateg.model'
export * from './ohro.model';

export class Tree {
  exist: boolean = false;
  id: string = '';
  S: Strom = new Strom()
  L: Lokal = new Lokal()
  PD: PisemneD = new PisemneD()
  OD: ObrazoveD = new ObrazoveD()
  K: Kateg = new Kateg()
  C: Comment = new Comment()
  O: Ohro = new Ohro()
  constructor() {
  }

  loadTree(
    strom: StromI,
    lokal: LokalI,
    pisemneD: PisemneDI,
    obrazoveD: ObrazoveDI, 
    kateg: KategI, 
    comment: CommentI,
    ohro: OhroI) {
      this.S.loadParams(strom)
      this.L.loadParams(lokal)
      this.PD.loadParams(pisemneD)
      this.OD.loadParams(obrazoveD)
      this.K.loadParams(kateg)
      this.C.loadParams(comment)
      this.O.loadParams(ohro)
  }

  printTree() {
    console.log(this.S._get())
    console.log(this.L._get())
    console.log(this.PD._get())
    console.log(this.OD._get())
    console.log(this.K._get())
    console.log(this.C._get())
    console.log(this.O._get())
  }
}
