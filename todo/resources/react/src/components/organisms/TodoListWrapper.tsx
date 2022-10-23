import { Box, Tabs, Text, Button, Group, Stack } from "@mantine/core";
import { IconBallpen, IconCircleCheck, IconCircleDashed } from "@tabler/icons";
import useSWR from "swr";
import { apiUrl } from "../../utilities/apiUrl";
import { fetcher } from "../../utilities/fetcher";
import { TodoTabPanel } from "./TodoTabPanel";

export const TodoListWrapper = () => {
  const { data, error } = useSWR(apiUrl, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // 未完了TODO
  const incompleteTodoData = data.filter((todo: TTodo) => todo.done === 0)
  // 完了TODO
  const completeTodoData = data.filter((todo: TTodo) => todo.done === 1)

  return (
    <Box mt="30px">
      <Tabs defaultValue="all" sx={{ maxWidth: "800px", margin: 'auto' }}>
        <Tabs.List>
          <Tabs.Tab sx={{ width: "33%" }} value="all" icon={<IconBallpen size={24} />}>all</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="incomplete" icon={<IconCircleDashed size={24} />}>incomplete</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="complete" icon={<IconCircleCheck size={24} />}>complete</Tabs.Tab>
        </Tabs.List>
        {/* 全todo一覧 */}
        <TodoTabPanel value="all" data={data} />

        {/* 未todo一覧 */}
        <TodoTabPanel value="incomplete" data={incompleteTodoData} />

        {/* 完了todo一覧 */}
        <TodoTabPanel value="complete" data={completeTodoData} />
      </Tabs>
    </Box >
  )
}
