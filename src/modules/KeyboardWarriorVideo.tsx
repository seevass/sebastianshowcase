import { AspectRatio } from '@mantine/core';

function KeyboardWarriorVideo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/7GSTho60_mE"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{width:'95vw'}}
      />
    </AspectRatio>
  );
}

export default KeyboardWarriorVideo;

