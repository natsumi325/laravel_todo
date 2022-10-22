import { Box, Tabs, Text, Button, Group, Stack } from "@mantine/core";
import { IconBallpen, IconCircle, IconCircleCheck, IconCircleDashed, IconSquare } from "@tabler/icons";
import useSWR from 'swr';
import { fetcher } from '../../utilities/fetcher';

export const TodoList = () => {
  const { data, error } = useSWR('/api/todos', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data);
  return (
    <Box mt="30px">
      <Tabs defaultValue="all" sx={{ maxWidth: "800px", margin: 'auto' }}>
        <Tabs.List>
          <Tabs.Tab sx={{ width: "33%" }} value="all" icon={<IconBallpen size={24} />}>all</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="incomplete" icon={<IconCircleDashed size={24} />}>incomplete</Tabs.Tab>
          <Tabs.Tab sx={{ width: "33%" }} value="complete" icon={<IconCircleCheck size={24} />}>complete</Tabs.Tab>
        </Tabs.List>

        {/* 全todo一覧 */}
        <Tabs.Panel value="all" pt="md">
          <Stack spacing="sm">
            {data.map((todo: TTodo) => (
              <Group key={todo.id}>
                <Text sx={{ minWidth: '20rem' }}>・{todo.task}</Text>
                <Button variant={todo.done === 0 ? 'outline' : 'default'}>{todo.done === 0 ? '完了済みにする' : '完了'}</Button>
                <Button color="red">削除</Button>
              </Group>
            ))}
          </Stack>
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
    </Box >
  )
}
