import { Tabs } from "@mantine/core";
import { memo } from "react";
import { useFetchTodo } from "../../hooks/useFetchTodo";
import { TodoTabPanel } from "./TodoTabPanel";

export const TodoTabPanels = memo(() => {
  const { data, error } = useFetchTodo();
  if (error) return <Tabs.Panel value="all" pt="md">データの取得に失敗しました</Tabs.Panel>
  if (!data) return <Tabs.Panel value="all" pt="md">loading...</Tabs.Panel>
  // 未完了TODO
  const incompleteTodoData = data && data.filter((todo: TTodo) => todo.done === 0)
  // 完了TODO
  const completeTodoData = data && data.filter((todo: TTodo) => todo.done === 1)
  return (
    <>
      {/* 全todo一覧 */}
      <TodoTabPanel value="all" data={data} />
      {/* 未todo一覧 */}
      <TodoTabPanel value="incomplete" data={incompleteTodoData} />
      {/* 完了todo一覧 */}
      <TodoTabPanel value="complete" data={completeTodoData} />
    </>
  )
})
