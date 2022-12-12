import { VideoContainer } from './Video.styled';

export const Videoo = () => {
  return (
  
      <VideoContainer>
      <video src={process.env.PUBLIC_URL + '/video/video.mp4'} autoPlay loop playsInline muted></video>
      </VideoContainer>
    
  );
};
