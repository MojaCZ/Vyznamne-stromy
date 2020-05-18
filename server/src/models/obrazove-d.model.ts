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
}