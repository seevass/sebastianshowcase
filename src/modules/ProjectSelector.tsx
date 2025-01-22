import { useState } from 'react';
import './ProjectSelector.css';
import { Stack, Image, Group, Text} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ProjectList from './ProjectList';
import {images} from '../helpers/images.ts'

import { theme } from '../theme'; 

function ProjectSelector() {
  const [imageSrc, setImageSrc] = useState(images.tvdefault);
  const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.lg})`);
  const text_breakpoint_right = isMobile ? '10px' : '265px';
  const text_breakpoint_left = isMobile ? '10px' : '10px';
  const img_breakpoint_right = isMobile ? '0px' : '100px';
  const img_breakpoint_left = isMobile ? '0px' : '100px';
  const breakpoint_top = isMobile? '50px' : '0px';
  const navlink_title_breakpoint = isMobile ? '2.5rem' : '3rem';

  const handleImageChange = (newImageSrc: string) => {
    setImageSrc(newImageSrc);
  };

  return (
    <Stack 
      align= {isMobile ? 'stretch' : 'stretch' }
      justify='flex-end' 

      style={{ paddingRight: text_breakpoint_right, paddingLeft: text_breakpoint_left, paddingTop: breakpoint_top}}>
      <Group justify='space-between' align='flex-start'>
        <div>
          <Text className="projectTitle" style={{fontSize: navlink_title_breakpoint}}>
            Projects
          </Text>
          <ProjectList
            links={[
              ['keyboardwarrior', 'Keyboard Warrior', images.keyboardwarrior],
              ['quickcast', 'Quickcast', images.quickcast],
              ['blendify', 'Blendify', images.blendify],
            ]}
            setImageSrc={handleImageChange} // Pass the function to handle image change
            style={{
              columnCount: isMobile ? 1 : 2,
            }}
          />
        </div>
        <div>
          <Text className="projectTitle" style={{fontSize: navlink_title_breakpoint}}> 
            Passions
          </Text>
          <ProjectList
            links={[
              ['photography', 'Photography', images.photography],
              ['nishikigoi', 'Nishikigoi', images.nishikigoi],
              ['graphicdesign', 'Graphic Design', images.nishikigoi],
              ['keyboards', 'Keyboards', images.keyboards],

            ]}
            setImageSrc={handleImageChange} // Pass the function to handle image change
            style={{
              columnCount: isMobile ? 1 : 2,
            }}
          />
        </div>
      </Group>
      <div style={{ overflow: "hidden", height: "100vh" }}>
        <Image src={images.tvbackground} alt="tv background" fit="contain" style={{ paddingLeft: img_breakpoint_left, paddingRight: img_breakpoint_right, maxWidth: '100%', maxHeight: '100%', transform: 'translate(0%, 0%)' }} className="background"/>
        <Image src={imageSrc} alt="project preview" fit="contain" style={{ paddingLeft: img_breakpoint_left, paddingRight: img_breakpoint_right, maxWidth: '100%', maxHeight: '100%', transform: 'translate(0%, -100%)' }} className="background-image"/>
        <Image src={images.tvmask} alt="graphicOverlay" style={{paddingLeft: img_breakpoint_left, paddingRight: img_breakpoint_right, maxWidth: '100%', maxHeight: '100%', transform: 'translate(0%, -200%)'}} className="overlapping-image"/>
      </div>

    </Stack>
  );
}

export default ProjectSelector;
