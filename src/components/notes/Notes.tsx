import styled from 'styled-components';
import { AddNotes } from './AddNotes';
import { NotesList } from './NotesList';

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  border-right: 0.125rem solid #434343;
  padding: 0.5rem;
`;

export const Notes = () => {
  return (
    <NotesWrapper>
      <NotesList />
      <AddNotes />
    </NotesWrapper>
  );
};
