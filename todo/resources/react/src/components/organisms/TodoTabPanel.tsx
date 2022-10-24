import { Tabs, Stack } from "@mantine/core";
import axios from "axios";
import { memo, useCallback } from "react";
import { useSWRConfig } from "swr";
import { useMutateTodo } from "../../hooks/useMutateTodo";
import { apiUrl } from "../../utilities/apiUrl";
import { TodoItem } from "../molecules/TodoItem";
type Props = {
  data: Array<TTodo>;
  value: string;
}

export const TodoTabPanel = memo(({ data, value }: Props) => {
  const { toggleTodoStatus, deleteTodoItem } = useMutateTodo();
  return (
    <Tabs.Panel value={value} pt="md" >
      <Stack spacing="sm">
        {data.map((todo: TTodo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodoStatus={toggleTodoStatus.bind(this, todo)} deleteTodo={deleteTodoItem.bind(this, todo.id)} />
        ))}
      </Stack>
    </Tabs.Panel>
  )
})
