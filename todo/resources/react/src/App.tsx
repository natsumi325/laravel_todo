import { Button, Box, TextInput, Group, Tabs, List } from "@mantine/core";
import { IconBallpen, IconCircleCheck, IconCircleDashed } from "@tabler/icons";
import useSWR from "swr";
import { fetcher } from "./utilities/fetcher";

export const App = () => {
  const { data, error } = useSWR('/api/todos', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data);

  return (
    <Box>
      <h1>TODO APP</h1>
      {/* todoフォーム */}
      <Box sx={{ maxWidth: 500 }} mx="auto">
        <Group position="right" mt="md" noWrap>
          <TextInput
            withAsterisk
            placeholder="タスクを入力してください"
            sx={{ width: '100%' }}
          />
          <Button type="button">追加</Button>
        </Group>
      </Box>
      <Box mt="30px">
        <Tabs defaultValue="all" sx={{ maxWidth: "800px", margin: 'auto' }}>
          <Tabs.List>
            <Tabs.Tab sx={{ width: "33%" }} value="all" icon={<IconBallpen size={24} />}>all</Tabs.Tab>
            <Tabs.Tab sx={{ width: "33%" }} value="incomplete" icon={<IconCircleDashed size={24} />}>incomplete</Tabs.Tab>
            <Tabs.Tab sx={{ width: "33%" }} value="complete" icon={<IconCircleCheck size={24} />}>complete</Tabs.Tab>
          </Tabs.List>

          {/* 全todo一覧 */}
          <Tabs.Panel value="all" pt="md">
            <List>
              {data.map((todo: TTodo) => (
                <List.Item key={todo.id}>{todo.task}</List.Item>
              ))}
            </List>
          </Tabs.Panel>

          {/* 未todo一覧 */}
          <Tabs.Panel value="incomplete" pt="md">
            incomplete tab content
          </Tabs.Panel>

          {/* 完了todo一覧 */}
          <Tabs.Panel value="complete" pt="md">
            complete tab content
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  )
};
