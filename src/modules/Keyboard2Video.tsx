import { AspectRatio } from '@mantine/core';

function Keyboard2Video() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/_Hxx-7g6W6o"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{width:'95vw'}}
      />
    </AspectRatio>
  );
}

export default Keyboard2Video;

