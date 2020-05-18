export interface CommentI {
  COM_U: string;
  COM_A: string;
}

export class Comment implements CommentI {
  COM_U: string = "";
  COM_A: string = "";
  loadQuerry = (querry: any) => {
    if (querry.length <= 0) { return }
    this.COM_U = querry[0].COM_U;
    this.COM_A = querry[0].COM_A;
  }
}