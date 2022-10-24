import { Tabs, Text, Button, Group, Stack } from "@mantine/core";
import axios from "axios";
import { useCallback } from "react";
import { useSWRConfig } from "swr";
import { apiUrl } from "../../utilities/apiUrl";
import { TodoItem } from "../molecules/TodoItem";
type Props = {
  data: Array<TTodo>;
  value: string;
}

export const TodoTabPanel = ({ data, value }: Props) => {
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
    <Tabs.Panel value={value} pt="md" >
      <Stack spacing="sm">
        {data.map((todo: TTodo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodoStatus={toggleTodoStatus.bind(this, todo)} deleteTodo={deleteTodo.bind(this, todo.id)} />
        ))}
      </Stack>
    </Tabs.Panel>
  )
}
