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

  getQuerry = (id: number) : string => {
    let querry: string = `INSERT INTO 
    lokal (strom_id, LON, LAT) 
    VALUES (${id},${this.LON},${this.LAT});`;
    return querry
  }

  loadParams = (params: LokalI) => {
    this.LON = params.LON;
    this.LAT = params.LAT;
  }

  _get = (): LokalI => {
    return {
      "LON": this.LON,
      "LAT": this.LAT
    }
  }
}