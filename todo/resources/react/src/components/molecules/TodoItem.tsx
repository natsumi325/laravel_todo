import { Button, Group, Text } from '@mantine/core';

type Props = {
  todo: TTodo;
  toggleTodoStatus: () => Promise<void>;
  deleteTodo: () => Promise<void>;
}

export const TodoItem = ({ todo, toggleTodoStatus, deleteTodo }: Props) => {
  return (
    <Group>
      <Text sx={{ minWidth: '20rem' }}>・{todo.task}</Text>
      <Button onClick={toggleTodoStatus} variant={todo.done === 1 ? 'light' : 'outline'}>{todo.done === 0 ? '完了済みにする' : '完了'}</Button>
      <Button color="red" onClick={deleteTodo}>削除</Button>
    </Group>
  )
}
