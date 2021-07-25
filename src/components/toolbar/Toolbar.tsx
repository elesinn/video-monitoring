import styled from 'styled-components';
import { FacilitySelect } from './FacilitySelect';
import { Filters } from './Filters';

const ToolbarContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Toolbar = () => {
  return (
    <ToolbarContainer>
      <FacilitySelect />
      <Filters />
    </ToolbarContainer>
  );
};
