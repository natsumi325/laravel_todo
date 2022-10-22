import { Box } from "@mantine/core";
import { TodoInput } from "./components/organisms/TodoInput";
import { TodoList } from "./components/organisms/TodoList";

export const App = () => {

  return (
    <Box>
      <h1>TODO APP</h1>
      <TodoInput />
      <TodoList />
    </Box>
  )
};
