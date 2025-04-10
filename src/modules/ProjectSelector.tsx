import { useState } from 'react';
import './ProjectSelector.css';
import { Stack, Image, Group, Text} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ProjectList from './ProjectList';
import {videos} from '../helpers/videos.ts'
import {images} from '../helpers/images.ts'

import { theme } from '../theme'; 

function ProjectSelector() {
  const [videoSrc, setVideoSrc] = useState(videos.loadingvideo);
  
  const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.lg})`);
  const text_breakpoint_right = isMobile ? '0px' : '12%';
  const text_breakpoint_left = isMobile ? '50px' : '0px';
  const breakpoint_top = isMobile? '70px' : '50px';
  const navlink_title_breakpoint = isMobile ? 'clamp(2rem, 7vw, 5rem)' : 'clamp(3rem, 3vw, 5rem)';

  const tv_breakpoint_width = isMobile ? '85vw' : '45vw';
  const tv_transform = isMobile? 'translate(0%, 0%)' : 'translate(0%, 2%)'
  const tv_video_transform = isMobile? 'translate(5%, -24%)' : 'translate(4.8%, -22%)'

  const handleVideoChange = (newVideoSrc: string) => {
    setVideoSrc(newVideoSrc);
  };

  return (
    <Stack 
      align= {isMobile ? 'stretch' : 'flex-start' }
      justify='flex-start' 
      style={{ 
        paddingRight: text_breakpoint_right, 
        paddingLeft: text_breakpoint_left, 
        paddingTop: breakpoint_top}}>
      <Group justify='flex-start'>
        <div>
          <Text className="projectTitle" style={{fontSize: navlink_title_breakpoint}}>
            Projects
          </Text>
          <ProjectList
            links={[
              ['keyboardwarrior', 'Keyboard Warrior', videos.keyboardwarriorvideo],
              ['quickcast', 'Quickcast', videos.quickcastvideo],
              ['blendify', 'Blendify', videos.blendifyvideo],
              ['sussyscript', 'SussyScript', videos.sussyscriptvideo],
            ]}
            setVideoSrc={handleVideoChange} // Pass the function to handle image change
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
              ['photography', 'Photography', videos.photographyvideo],
              ['nishikigoi', 'Nishikigoi', videos.nishikigoivideo],
              ['graphicdesign', 'Graphic Design', videos.graphicdesignvideo],
              ['keyboards', 'Keyboards', videos.keyboardvideo],

            ]}
            setVideoSrc={handleVideoChange} // Pass the function to handle image change
            style={{
              columnCount: isMobile ? 1 : 2,
            }}
          />
        </div>
      </Group>
      <div 
        style={{ 
          overflow: "hidden", 
          height: "100vh", 
          width: tv_breakpoint_width,
          transform: tv_transform,
           }}>
        <Image 
          src={images.tvbackground} 
          alt="tv background" 
          fit="contain" 
          style={{ 
            //paddingLeft: img_breakpoint_left, 
            //paddingRight: img_breakpoint_right, 
            maxWidth: '100%', 
            maxHeight: '100%', 
            transform: 'translate(0%, 0%)' }} 
            className="background"/>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            maxWidth: '80%',
            maxHeight: '100%',
            overflow: 'hidden',
          }}
        >
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Maintain aspect ratio of the video
              transform: tv_video_transform,
            }}
            className="background-image"
          />
        </div>
        <Image 
          src={images.tvmask} 
          alt="graphicOverlay" 
          style={{
            //paddingLeft: img_breakpoint_left, 
            //paddingRight: img_breakpoint_right, 
            maxWidth: '100%', 
            maxHeight: '100%', 
            transform: 'translate(0%, -100%)'}} 
            className="overlapping-image"/>
      </div>
      <div className='text'>
        ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
      </div>

    </Stack>
  );
}

export default ProjectSelector;
