interface IErrorParams {
  status: number;
  code: number;
  title: string;
  message: string;
}
export class LocalError extends Error {
  public message = 'Algo deu errado ao realizar a operação';
  public title = '';
  public status = 0;
  public code = 1;
  constructor({ message, status, title, code }: IErrorParams) {
    super(title);
    this.message = message;
    this.status = status;
    this.title = title;
    this.code = code;
  }
}