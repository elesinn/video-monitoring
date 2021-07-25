import styled from 'styled-components';
import { ICamera } from '../../types/ICamera';

interface Props {
  camera: ICamera;
  active: boolean;
  onClick: () => void;
}

const CameraContainer = styled.div<{ active?: boolean }>`
  height: 6.25rem;
  min-width: 10rem;
  border: 0.2rem solid #434343;
  border-color: ${({ active }) => (active ? '#1890ff' : '#434343')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.25rem;
  cursor: pointer;
`;

const CameraName = styled.div``;

export const CamerasListItem: React.FC<Props> = ({
  camera,
  onClick,
  active,
}) => {
  return (
    <CameraContainer onClick={onClick} active={active}>
      <CameraName>{camera.title}</CameraName>
    </CameraContainer>
  );
};
