import { Card } from 'antd';
import styled from 'styled-components';
import { INote } from '../../types/INote';

interface Props {
  note: INote;
}

const StyledCard = styled(Card)`
  border: 0.125rem solid #434343;
  border-radius: 0.5rem;
  width: 100%;
`;

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NotesListItem = ({ note }: Props) => {
  return (
    <StyledCard title={<AlignCenter>{`Note#${note.id}`}</AlignCenter>}>
      <AlignCenter>
        <p>
          <b>Notes: </b>
          {note.text}
        </p>
        <p>
          <b>Severity: </b>
          {note.severity}
        </p>
        <p>
          <b>Time: </b>
          {note.time}
        </p>
      </AlignCenter>
    </StyledCard>
  );
};
