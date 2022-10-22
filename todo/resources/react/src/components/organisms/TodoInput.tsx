import { Box, Button, Group, TextInput } from '@mantine/core'

export const TodoInput = () => {
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto" >
      <Group position="right" mt="md" noWrap>
        <TextInput
          withAsterisk
          placeholder="タスクを入力してください"
          sx={{ width: '100%' }}
        />
        <Button type="button">追加</Button>
      </Group>
    </Box>
  )
}
