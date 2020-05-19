export interface PisemneDI {
  URL: string[];
}

export class PisemneD implements PisemneDI {
  URL: string[] = [];

  loadQuerry = (querry: any) => { // 1:n
    if (querry.length <= 0) { return }
    for (let i: number = 0; i < querry.length; i++) {
      this.URL.push = querry[i].URL;
    }
  }

  getQuerry = (id: number) : string => {
    let querry: string = `INSERT INTO 
    pisemne_d (strom_id, URL) 
    VALUES (${id},${this.URL});`;
    return querry
  }

  loadParams = (params: any) => {
    this.URL = params.URL;
  }

  _get = (): PisemneDI => {
    return {
      "URL": this.URL
    }
  }
}