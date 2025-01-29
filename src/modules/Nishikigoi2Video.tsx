import { AspectRatio } from '@mantine/core';

function Nishikigoi2Video() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/rV00_FRZ3Oc"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{width:'95vw'}}
      />
    </AspectRatio>
  );
}

export default Nishikigoi2Video;

