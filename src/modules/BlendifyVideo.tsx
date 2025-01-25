import { Box } from '@mantine/core';
import blendifyvideo from '../../public/videos/Blendify Live Demo.mp4'

const BlendifyVideo = () => {
  return (
    <Box>
      <video
        src={blendifyvideo}
        controls
        style={{ width: '90vw' }}
      >
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default BlendifyVideo;
