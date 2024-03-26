import React from "react";
import { Box, Heading, Text, Image, SimpleGrid, Link, IconButton, VStack, HStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDF8ZW58MHx8fHwxNzExNDkwMzc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video1",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDJ8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video2",
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: "https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDN8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video3",
  },
  {
    id: 4,
    title: "Video 4",
    thumbnail: "https://images.unsplash.com/photo-1610072947120-8736bbfc56e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDR8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video4",
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail: "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDF8ZW58MHx8fHwxNzExNDkwMzc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video5",
  },
  {
    id: 6,
    title: "Video 6",
    thumbnail: "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDJ8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video6",
  },
  {
    id: 7,
    title: "Video 7",
    thumbnail: "https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDN8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video7",
  },
  {
    id: 8,
    title: "Video 8",
    thumbnail: "https://images.unsplash.com/photo-1610072947120-8736bbfc56e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDR8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video8",
  },
  {
    id: 9,
    title: "Video 9",
    thumbnail: "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDF8ZW58MHx8fHwxNzExNDkwMzc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video9",
  },
  {
    id: 10,
    title: "Video 10",
    thumbnail: "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDJ8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video10",
  },
  {
    id: 11,
    title: "Video 11",
    thumbnail: "https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDN8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video11",
  },
  {
    id: 12,
    title: "Video 12",
    thumbnail: "https://images.unsplash.com/photo-1610072947120-8736bbfc56e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbCUyMDR8ZW58MHx8fHwxNzExNDkwMzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    url: "https://example.com/video12",
  },
];

const Index = () => {
  return (
    <Box maxWidth="960px" margin="auto" padding={8}>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGVuJTIwa2FsaW1pJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExNDkwMzgwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chen Kalimi" />
        <Heading as="h1" size="2xl">
          Chen Kalimi
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Videographer & Content Creator
        </Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com/chenkalimi" isExternal>
            <IconButton icon={<FaTwitter />} aria-label="Twitter" size="lg" variant="ghost" />
          </Link>
          <Link href="https://linkedin.com/in/chenkalimi" isExternal>
            <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" variant="ghost" />
          </Link>
          <Link href="mailto:chen@example.com" isExternal>
            <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" variant="ghost" />
          </Link>
        </HStack>
      </VStack>

      <Heading as="h2" size="xl" mt={16} mb={8}>
        Video Portfolio
      </Heading>
      <SimpleGrid columns={4} spacing={8}>
        {videos.map((video) => (
          <Link key={video.id} href={video.url} isExternal>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden" position="relative" paddingTop="56.25%">
              <Image src={video.thumbnail} alt={video.title} position="absolute" top={0} left={0} width="100%" height="100%" objectFit="cover" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  {video.title}
                </Heading>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
