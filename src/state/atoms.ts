import { atom, selector } from 'recoil';
import { facilities } from '../components/toolbar/FacilitySelect';
import { IFacility } from '../types/IFacility';
import { IFilters } from '../types/IFilters';
import { INote } from '../types/INote';

export const activeCameraIdState = atom<string | undefined>({
  key: 'activeCameraIdState',
  default: undefined,
});

export const activeFacilityIdState = atom<IFacility>({
  key: 'activeFacilityIdState',
  default: facilities[0],
});

export const notesListState = atom<Record<IFacility, INote[]> | undefined>({
  key: 'notesListState',
  default: undefined,
});

export const filtersState = atom<IFilters | undefined>({
  key: 'filtersState',
  default: undefined,
});

export const filteredCurrentFacilityNotesListState = selector({
  key: 'filteredCurrentFacilityNotesListState',
  get: ({ get }) => {
    const filters = get(filtersState);
    const facility = get(activeFacilityIdState);
    const list = get(notesListState);

    const currentList = list ? list[facility] : undefined;

    return currentList?.filter((note) => {
      if (filters?.severities && !filters?.severities.includes(note.severity)) {
        return false;
      }
      if (filters?.timeFrom && filters?.timeTo) {
        if (note.time > filters.timeTo || note.time < filters.timeFrom) {
          return false;
        }
      }
      return true;
    });
  },
});
