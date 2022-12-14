import { Tabs, Stack } from "@mantine/core";
import { memo } from "react";
import { useMutateTodo } from "../../hooks/useMutateTodo";
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
