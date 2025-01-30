import { AspectRatio } from '@mantine/core';

function QuickcastVideo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/8pLjatyd1Bk "
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{width:'95vw'}}
      />
    </AspectRatio>
  );
}

export default QuickcastVideo;

