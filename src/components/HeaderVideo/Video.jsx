import { VideoContainer,Videoo, Overlay } from './Video.styled';

export const Video = () => {
  return (
    <>
      <VideoContainer>
        <Videoo
          url={'https://youtu.be/Ble0j75GRKk'}
          playing
          loop
          muted
          width="100%"
          height="100%"
          controls={false}
        />
      </VideoContainer>
      <Overlay />
    </>
  );
};