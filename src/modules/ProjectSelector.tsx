import { useState } from 'react';
import './ProjectSelector.css';
import { Stack, Image, Group} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ProjectList from './ProjectList';

import TempImage from '../assets/flower-mural.png';
import KeyboardWarriorImage from '../assets/KeyboardWarriorImage.gif';
import QuickcastImage from '../assets/QuickcastImage.gif';
import BlendifyImage from '../assets/BlendifyImage.gif';
import PhotographyImage from '../assets/PhotographyImage.gif';

import graphicMask from "../assets/Personal-Website-TV.png"

function ProjectSelector() {
  const [imageSrc, setImageSrc] = useState(TempImage);
  const isMobile = useMediaQuery('(max-width: 990px)');
  const breakpoint = isMobile ? '10px' : '400px';

  const handleImageChange = (newImageSrc: string) => {
    setImageSrc(newImageSrc);
  };

  return (
    <Stack 
      align='stretch'
      justify='flex-start' 

      style={{ paddingRight: breakpoint }}>
      <Group justify='space-between' align='flex-start'>
        <ProjectList 
          title="Projects"
          links={[
            ['#/keyboardwarrior', 'Keyboard Warrior', KeyboardWarriorImage],
            ['#/quickcast', 'Quickcast', QuickcastImage],
            ['#/blendify', 'Blendify', BlendifyImage]
          ]}
           setImageSrc={handleImageChange} // Pass the function to handle image change
        />

        <ProjectList 
          title="Passions"
          links={[
            ['#/photography', 'Photography', PhotographyImage]
          ]}
           setImageSrc={handleImageChange} // Pass the function to handle image change
        />
      </Group>
      <Image src={graphicMask} alt="graphicOverlay" style={{maxWidth: '100%', maxHeight: '100%', transform: ''}} className="overlapping-image"/>
      <Image src={imageSrc} alt="project preview" fit="contain" style={{ maxWidth: '100%', maxHeight: '100%', transform: 'translate(0%, -100%' }} className="background-image"/>

    </Stack>
  );
}

export default ProjectSelector;
