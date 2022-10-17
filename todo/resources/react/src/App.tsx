import { Button, Box, TextInput, Checkbox, Group, Tabs } from "@mantine/core";
import { IconBallpen, IconCircleCheck, IconCircleDashed } from "@tabler/icons";

export const App = () => {
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
      <Tabs defaultValue="all">
        <Tabs.List>
          <Tabs.Tab value="all" icon={<IconBallpen size={24} />}>all</Tabs.Tab>
          <Tabs.Tab value="incomplete" icon={<IconCircleDashed size={24} />}>incomplete</Tabs.Tab>
          <Tabs.Tab value="complete" icon={<IconCircleCheck size={24} />}>complete</Tabs.Tab>
        </Tabs.List>

        {/* 全todo一覧 */}
        <Tabs.Panel value="all" pt="md">
          all tab content
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
  )
};
