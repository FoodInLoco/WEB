interface IErrorParams {
  status: number;
  title: string;
  message: string;
}

export class ApiError extends Error {
  public message = '';
  public title = '';
  public status = 0;

  constructor({ message, status, title}: IErrorParams) {
    super(title);
    this.message =
      status >= 400 && status < 500
        ? message
        : 'Algo deu errado ao realizar a operação';
    this.status = status;
    this.title = title;
  }
}
