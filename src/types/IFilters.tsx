import { SeveritiesEnum } from '../constants';

export interface IFilters {
  timeFrom?: number;
  timeTo?: number;
  severities?: SeveritiesEnum[];
}
