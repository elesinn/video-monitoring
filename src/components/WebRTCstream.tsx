import Title from 'antd/lib/typography/Title';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { activeCameraIdState } from '../state/atoms';

const WebRTCstreamWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const VideoStream = styled.video`
  width: 100%;
  height: 100%;
`;

export const WebRTCstream = () => {
  const activeCameraId = useRecoilValue(activeCameraIdState);
  const [localStream, setLocalStream] = useState<MediaStream>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!localStream) {
      navigator.mediaDevices
        .getUserMedia({
          //   audio: true,
          video: true,
        })
        .then((stream) => {
          setLocalStream(stream);
        })
        .catch((e) => setError(String(e)));
    }

    return () => {
      localStream?.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, [localStream]);

  if (!activeCameraId) {
    return (
      <WebRTCstreamWrapper>
        <Title level={1}>No camera selected!</Title>
      </WebRTCstreamWrapper>
    );
  }

  return (
    <WebRTCstreamWrapper>
      {error && error}
      {localStream && (
        <VideoStream
          autoPlay
          ref={(video) => {
            if (video) {
              video.srcObject = localStream;
            }
          }}
        />
      )}
    </WebRTCstreamWrapper>
  );
};
