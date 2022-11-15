interface IErrorParams {
  status: number;
  title: string;
  message: string;
}
export class LocalError extends Error {
  public message = 'Algo deu errado ao realizar a operação';
  public title = '';
  public status = 0;
  constructor({ message, status, title, }: IErrorParams) {
    super(title);
    this.message = message;
    this.status = status;
    this.title = title;
  }
}