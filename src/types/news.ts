import { IMultiLang } from "./Doctor";

export interface INewsData {
  date: string;
  title: IMultiLang;
  description: IMultiLang;
  slug: string;
  option: {
    title: IMultiLang;
    img: string | "";
    subtitle: IMultiLang;
  }[];
}
