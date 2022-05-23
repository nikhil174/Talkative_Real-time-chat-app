import { Badge, CloseButton } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Badge
      px={2}
      borderRadius="lg"
      m={1}
      mb={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      varient="solid"
      fontSize={8}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseButton pl={1} ml={1} />
    </Badge>
  );
};

export default UserBadgeItem;
