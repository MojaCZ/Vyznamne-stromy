import {Strom} from './strom.model'
import {Comment } from './comment.model'
import {Lokal } from './lokal.model'
import {PisemneD } from './pisemne-d.model'
import {ObrazoveD } from './obrazove-d.model'
import {Kateg } from './kateg.model'
import {Ohro } from './ohro.model';

export class Tree {
  exist: boolean = false;
  S: Strom = new Strom()
  L: Lokal = new Lokal()
  PD: PisemneD = new PisemneD()
  OD: ObrazoveD = new ObrazoveD()
  K: Kateg = new Kateg()
  C: Comment = new Comment()
  O: Ohro = new Ohro()
  constructor() {
  }

  loadTree() {
    
  }
}
