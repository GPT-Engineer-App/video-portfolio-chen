import React, { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import VideoModal from "../components/VideoModal";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const videoUrls = ["http://example.com/video1.mp4"];

  return (
    <>
      <SimpleGrid columns={4} spacing={10}>
        {videoUrls.map((videoUrl, index) => (
          <Box key={index} as="button" onClick={() => openModal(videoUrl)}>
            {}
            <Box bg="gray.200" width="100%" height="150px"></Box>
          </Box>
        ))}
      </SimpleGrid>
      <VideoModal isOpen={isOpen} onClose={closeModal} videoUrl={selectedVideo} />
    </>
  );
};

export default Index;
