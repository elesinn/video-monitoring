import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { filteredCurrentFacilityNotesListState } from '../../state/atoms';
import { NotesListItem } from './NotesListItem';

const NotesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 1rem;
`;

export const NotesList = () => {
  const notesList = useRecoilValue(filteredCurrentFacilityNotesListState);

  return (
    <NotesListWrapper>
      {notesList?.map((note) => (
        <NotesListItem key={note.id} note={note} />
      ))}
    </NotesListWrapper>
  );
};
