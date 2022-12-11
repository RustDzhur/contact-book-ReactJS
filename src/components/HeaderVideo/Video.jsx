import { VideoContainer, Videoo, Overlay } from "./Video.styled";

export const Video = () => {
  return (
<>
      <VideoContainer>
        <Videoo
          background={true}
          height={1080}
          loop={true}
          responsive
          video="780183909"
          width={1920}
          autoplay={true}
        />
      </VideoContainer>
      <Overlay />
    </>
  );
};