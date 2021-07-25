import { ICameras } from '../../types/ICamera';
import { CamerasListItem } from './CamerasListItem';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { activeCameraIdState } from '../../state/atoms';

interface Props {
  cameras: ICameras;
}

const CamerasListContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

export const CamerasList = ({ cameras }: Props) => {
  const [activeCameraId, setActiveCameraId] =
    useRecoilState(activeCameraIdState);

  return (
    <CamerasListContainer>
      {Object.entries(cameras).map(([id, camera]) => {
        return (
          <CamerasListItem
            key={id}
            camera={camera}
            onClick={() => {
              setActiveCameraId(id);
            }}
            active={activeCameraId === id}
          />
        );
      })}
    </CamerasListContainer>
  );
};
