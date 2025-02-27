import { IMultiLang } from "./Doctor";

export interface ISpesiality {
  id: number;
  slug: string | null;
  name: IMultiLang;
  active: boolean;
}

export interface ISity {
  id: number;
  name: IMultiLang;
}
