export interface LokalI {
  LON: number;
  LAT: number;
}

export class Lokal implements LokalI {
  LON: number = 0;
  LAT: number = 0;
  loadQuerry = (querry: any) => {
    if (querry.length <= 0) { return }
    this.LON = querry[0].LON;
    this.LAT = querry[0].LAT;
  }
}