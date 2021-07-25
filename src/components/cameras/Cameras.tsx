import { ICameras } from '../../types/ICamera';
import { CamerasList } from './CamerasList';

const cameras: ICameras = {
  cam1: { title: 'CAM#1' },
  cam2: { title: 'CAM#2' },
  cam3: { title: 'CAM#3' },
  cam4: { title: 'CAM#4' },
  cam5: { title: 'CAM#5' },
  cam6: { title: 'CAM#6' },
  cam7: { title: 'CAM#7' },
  cam8: { title: 'CAM#8' },
  cam9: { title: 'CAM#9' },
  cam10: { title: 'CAM#10' },
  cam11: { title: 'CAM#11' },
  cam12: { title: 'CAM#12' },
  cam13: { title: 'CAM#13' },
  cam14: { title: 'CAM#14' },
  cam15: { title: 'CAM#15' },
};

export const Cameras = () => {
  return <CamerasList cameras={cameras} />;
};
