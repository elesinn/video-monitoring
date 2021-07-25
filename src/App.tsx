import { FC } from 'react';
import './App.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Notes } from './components/notes/Notes';
import { RecoilRoot } from 'recoil';
import { WebRTCstream } from './components/WebRTCstream';

const MainWrapper = styled.div`
  height: 100vh;
  padding: 0 1rem;
`;

const StyledHeader = styled.div`
  /* height: 10rem; */
`;

const Sidebar = styled.div`
  width: 30rem;
`;

const MainContent = styled.div`
  width: 100%;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 10rem);
`;

const App: FC = () => (
  <RecoilRoot>
    <MainWrapper>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <MainLayout>
        <Sidebar>
          <Notes />
        </Sidebar>
        <MainContent>
          <WebRTCstream />
        </MainContent>
      </MainLayout>
    </MainWrapper>
  </RecoilRoot>
);

export default App;
