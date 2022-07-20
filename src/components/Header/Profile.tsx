import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thomás Bueno</Text>
        <Text color="gray.300" fontSize="small">
          thomasbuenou@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Thomás Bueno" src="/" />
    </Flex>
  );
}
