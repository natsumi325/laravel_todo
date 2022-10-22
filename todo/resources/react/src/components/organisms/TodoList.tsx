import { Box, Tabs, Text, Button, Group, Stack } from "@mantine/core";
import { IconBallpen, IconCircleCheck, IconCircleDashed } from "@tabler/icons";
import useSWR from "swr";
import { apiUrl } from "../../utilities/apiUrl";
import { fetcher } from "../../utilities/fetcher";
import { AllTodoItem } from "./AllTodoItem";

export const TodoList = () => {
  const { data, error } = useSWR(apiUrl, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Box mt="30px">
      <Tabs defaultValue="all" sx={{ maxWidth: "800px", margin: 'auto' }}>
        <Tabs.List>
          <Tabs.Tab sx={{ width: "33%" }} value="all" icon={<IconBallpen size={24} />}>all</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="incomplete" icon={<IconCircleDashed size={24} />}>incomplete</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="complete" icon={<IconCircleCheck size={24} />}>complete</Tabs.Tab>
        </Tabs.List>
        {/* 全todo一覧 */}
        <AllTodoItem data={data} />

        {/* 未todo一覧 */}
        <Tabs.Panel value="incomplete" pt="md">
          incomplete tab content
        </Tabs.Panel>

        {/* 完了todo一覧 */}
        <Tabs.Panel value="complete" pt="md">
          complete tab content
        </Tabs.Panel>
      </Tabs>
    </Box >
  )
}
