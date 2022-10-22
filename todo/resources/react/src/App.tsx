import { Box } from "@mantine/core";
import { TodoInput } from "./components/organisms/TodoInput";
import { TodoListWrapper } from "./components/organisms/TodoListWrapper";

export const App = () => {

  return (
    <Box>
      <h1>TODO APP</h1>
      <TodoInput />
      <TodoListWrapper />
    </Box>
  )
};
