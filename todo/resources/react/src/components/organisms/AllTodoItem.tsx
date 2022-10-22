import { Box, Tabs, Text, Button, Group, Stack } from "@mantine/core";
import axios from "axios";
import { useCallback } from "react";
import { useSWRConfig } from "swr";
import { apiUrl } from "../../utilities/apiUrl";

type Props = { data: TTodo[] }

export const AllTodoItem = ({ data }: Props) => {
  const { mutate } = useSWRConfig();
  // todoの状態切り替え（完了済み⇔未完了）
  const toggleTodoStatus = useCallback(async (todo: TUpdateTodo) => {
    const updateTodo = { done: todo.done == 0 ? 1 : 0 }
    await axios.put(`${apiUrl}/${todo.id}`, updateTodo);
    mutate(apiUrl);
  }, []);
  // todo削除
  const deleteTodo = useCallback(async (id: string) => {
    await axios.delete(`${apiUrl}/${id}`);
    mutate(apiUrl);
  }, []);
  return (
    <Tabs.Panel value="all" pt="md" >
      <Stack spacing="sm">
        {data.map((todo: TTodo) => (
          <Group key={todo.id}>
            <Text sx={{ minWidth: '20rem' }}>・{todo.task}</Text>
            <Button onClick={() => toggleTodoStatus(todo)} variant={todo.done === 1 ? 'light' : 'outline'}>{todo.done === 0 ? '完了済みにする' : '完了'}</Button>
            <Button color="red" onClick={() => deleteTodo(todo.id)}>削除</Button>
          </Group>
        ))}
      </Stack>
    </Tabs.Panel >
  )
}
