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

import { theme } from '../theme'; 

function ProjectSelector() {
  const [imageSrc, setImageSrc] = useState(TempImage);
  const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.lg})`);
  const text_breakpoint_right = isMobile ? '10px' : '300px';
  const text_breakpoint_left = isMobile ? '0px' : '10px';
  const img_breakpoint_right = isMobile ? '0px' : '150px';
  const img_breakpoint_left = isMobile ? '0px' : '150px';
  const breakpoint_top = isMobile? '50px' : '0px';

  const handleImageChange = (newImageSrc: string) => {
    setImageSrc(newImageSrc);
  };

  return (
    <Stack 
      align= {isMobile ? 'flex-start' : 'stretch' }
      justify='flex-start' 

      style={{ paddingRight: text_breakpoint_right, paddingLeft: text_breakpoint_left, paddingTop: breakpoint_top}}>
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
      <Image src={graphicMask} alt="graphicOverlay" style={{paddingLeft: img_breakpoint_left, paddingRight: img_breakpoint_right, maxWidth: '100%', maxHeight: '100%', transform: ''}} className="overlapping-image"/>
      <Image src={imageSrc} alt="project preview" fit="contain" style={{ paddingLeft: img_breakpoint_left, paddingRight: img_breakpoint_right, maxWidth: '100%', maxHeight: '100%', transform: 'translate(0%, -105%)' }} className="background-image"/>

    </Stack>
  );
}

export default ProjectSelector;
