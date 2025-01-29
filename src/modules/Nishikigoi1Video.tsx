import { AspectRatio } from '@mantine/core';

function Nishikigoi1Video() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube-nocookie.com/embed/_D_Z_fRSkR0?si=zSIxNl4GBcxuDczQ"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{width:'95vw'}}
      />
    </AspectRatio>
  );
}

export default Nishikigoi1Video;

