export interface ObrazoveDI {
  URL: string[];
}

export class ObrazoveD implements ObrazoveDI {
  URL: string[] = [];

  loadQuerry = (querry: any) => { // 1:n
    if (querry.length <= 0) { return }
    for (let i: number = 0; i < querry.length; i++) {
      this.URL.push = querry[i].URL;
    }
  }

  getQuerry = (id: number) : string => {
    let querry: string = `INSERT INTO 
    obrazove_d (strom_id, URL) 
    VALUES (${id},${this.URL});`;
    return querry
  }

  loadParams(params: ObrazoveDI) {
    this.URL = params.URL
  }

  _get = (): ObrazoveDI => {
    return {
      "URL": this.URL
    }
  }
}