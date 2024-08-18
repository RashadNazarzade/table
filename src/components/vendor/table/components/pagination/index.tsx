import { HStack } from "@chakra-ui/react";

import Info from "./components/info"
import PagButtons from "./components/pag-buttons"

export default function Pagination() {
  return (
      <HStack justifyContent="flex-end" gap="12">
          <Info />
          <PagButtons />
      </HStack>
  );
}
