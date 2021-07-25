import styled from 'styled-components';
import { Cameras } from './cameras/Cameras';
import { Toolbar } from './toolbar/Toolbar';

const HeaderWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
  border-bottom: 0.125rem solid #434343;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Toolbar />
      <Cameras />
    </HeaderWrapper>
  );
};
