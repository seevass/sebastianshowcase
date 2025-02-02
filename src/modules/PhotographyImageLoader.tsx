import { SimpleGrid, Image } from '@mantine/core';

const images = import.meta.glob('/src/assets/Photography/PhotographyImages/*.{png,jpg,jpeg,gif,webp,JPG}', { eager: true });

const imageList = Object.values(images).map((img: any) => img.default);

export default function PhotographyImageLoader() {
  return (
    <SimpleGrid cols={4} spacing="md">
      {imageList.map((src, index) => (
        <Image key={index} src={src} alt={`Image ${index}`} />
      ))}
    </SimpleGrid>
  );
}
