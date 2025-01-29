import { AspectRatio } from '@mantine/core';

function BlendifyVideo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/50UkaxmEZf0"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{width:'95vw'}}
      />
    </AspectRatio>
  );
}

export default BlendifyVideo;

