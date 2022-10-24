import { Box, Button, Group, TextInput } from '@mantine/core'
import { memo } from 'react'
import { useMutateTodo } from '../../hooks/useMutateTodo';


export const TodoInput = memo(() => {
  const { inputEl, addTodoItem } = useMutateTodo();
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <Group position="right" mt="md" noWrap>
        <TextInput
          withAsterisk
          placeholder="タスクを入力してください"
          sx={{ width: '100%' }}
          ref={inputEl}
        />
        <Button type="button" onClick={addTodoItem}>追加</Button>
      </Group>
    </Box>
  )
})
