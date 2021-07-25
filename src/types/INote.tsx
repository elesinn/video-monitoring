import { SeveritiesEnum } from '../constants';

export interface INote {
  id: number;
  text: string;
  severity: SeveritiesEnum;
  time: number;
}
