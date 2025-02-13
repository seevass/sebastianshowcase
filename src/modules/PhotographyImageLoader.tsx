import { SimpleGrid, Image } from "@mantine/core";

const images = import.meta.glob(
  "/src/assets/Photography/PhotographyImages/*/*.{png,jpg,jpeg,gif,webp,JPG}",
  { eager: true }
);

// Convert object to array and extract folder info
const imageList = Object.entries(images).map(([path, img]: any) => ({
  src: img.default,
  folder: path.match(/PhotographyImages\/(\d+)\//)?.[1] ?? "9999", // Extract folder number, default to a large number if missing
  filename: path,
}));

// Sort images by folder number (ascending)
imageList.sort((a, b) => Number(a.folder) - Number(b.folder));

export default function PhotographyImageLoader() {
  return (
    <SimpleGrid cols={4} spacing="md">
      {imageList.map((img, index) => (
        <Image key={index} src={img.src} alt={`Image ${index}`} />
      ))}
    </SimpleGrid>
  );
}
