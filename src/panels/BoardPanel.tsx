import { observer } from "mobx-react-lite";
import { Box, Flex } from "@chakra-ui/react";

import { useIsReady } from "@noli/business";

import { themeStore } from "@/stores/theme";
import { BOARD_CONTAINER_ID } from "@/utils/constants";
import { makePlugin } from "@/plugins/utils/Plugin";

function BoardPanel() {
  const isReady = useIsReady();
  const { boardBg } = themeStore.styles;

  return (
    <Flex h="100%" flex={1} direction="column">
      <Box w="100%" h="100%" bg={boardBg}>
        <Box id={BOARD_CONTAINER_ID} visibility={isReady ? "visible" : "hidden"}></Box>
      </Box>
      <>
        {makePlugin({
          w: 200,
          h: 64,
          task: "txt2img.sd",
          fields: ["prompt"],
          targetNodeType: "all",
          pivot: "left",
          follow: false,
        })}
      </>
    </Flex>
  );
}

export default observer(BoardPanel);
