import { Box } from "@mantine/core"
import { TodoInput } from "../organisms/TodoInput"
import { TodoListWrapper } from "../organisms/TodoListWrapper"
import { BasicLayout } from "../templates/BasicLayout"

export const Top = () => {
  return (
    <BasicLayout>
      <Box>
        <TodoInput />
        <TodoListWrapper />
      </Box>
    </BasicLayout>
  )
}
