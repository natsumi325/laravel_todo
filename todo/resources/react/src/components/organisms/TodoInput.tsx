import { Box, Button, Group, TextInput } from '@mantine/core'
import axios from 'axios'
import { memo, useCallback, useRef } from 'react'
import { useSWRConfig } from 'swr'
import { apiUrl } from '../../utilities/apiUrl'


export const TodoInput = memo(() => {
  const { mutate } = useSWRConfig();

  const inputEl = useRef<HTMLInputElement>(null);
  const addTodoItem = useCallback(async () => {
    if (inputEl.current?.value === "") {
      return;
    }
    const newTodoItem: TPostTodo = { task: inputEl.current!.value, done: 0 };
    await axios.post(apiUrl, newTodoItem);
    mutate(apiUrl);
    inputEl.current!.value = "";
  }, []);
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
