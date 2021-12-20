import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import React from "react";

export function Profile(){
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
        <Text>Paulo Henrique</Text>
        <Text color="gray.300" fontSize="small">
          Paulosouzap7@gmail.com
          </Text>
        </Box>

        <Avatar size="md" name="Diego Fernandes" src="https://avatars.githubusercontent.com/u/54220374?v=4"/>
      </Flex>

  )
}