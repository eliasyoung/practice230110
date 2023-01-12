export interface Http {
  get<T>(url: string, params?: unknown): Promise<T>;
  post<T>(url: string, data?: unknown): Promise<T>;
}

export interface ResType<T> {
  msg: string;
  data: T;
}

export interface IRoute {
  id: number;
  pid: number;
  path: string;
  link?: string;
  name: string;
  title: string;
  children?: IRoute[];
}
