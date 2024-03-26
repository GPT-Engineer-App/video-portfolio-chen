import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, AspectRatio } from "@chakra-ui/react";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Video</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AspectRatio ratio={16 / 9}>
            <iframe src={videoUrl} allowFullScreen />
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;