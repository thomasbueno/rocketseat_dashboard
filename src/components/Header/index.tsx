import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Search } from "./Search";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          aria-label="Open navigation"
          fontSize="24"
          mr="2"
          variant="unstyled"
          onClick={onOpen}
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
