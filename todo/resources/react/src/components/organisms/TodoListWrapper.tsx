import { Box, Tabs } from "@mantine/core";
import { IconBallpen, IconCircleCheck, IconCircleDashed } from "@tabler/icons";
import { memo } from "react";
import { TodoTabPanels } from "./TodoTabPanels";

export const TodoListWrapper = memo(() => {
  return (
    <Box mt="30px">
      <Tabs defaultValue="incomplete" sx={{ maxWidth: "800px", margin: 'auto' }}>
        <Tabs.List>
          <Tabs.Tab sx={{ width: "33%" }} value="incomplete" icon={<IconCircleDashed size={24} />}>incomplete</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="complete" icon={<IconCircleCheck size={24} />}>complete</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="all" icon={<IconBallpen size={24} />}>all</Tabs.Tab>
        </Tabs.List>
        <TodoTabPanels />
      </Tabs>
    </Box >
  )
})
