export interface IApiError {
  status: number;
  errors: IError[];
}

export interface IError {
  code: string;
  message: string;
}
