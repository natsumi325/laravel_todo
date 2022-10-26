import { memo } from "react";
import { useFetchTodo } from "../../hooks/useFetchTodo";
import { TodoStatusSort } from "./TodoStatusSort";
import { TodoTabPanelTexts } from "./TodoTabPanelTexts";


export const TodoTabPanels = memo(() => {
  const { data, error } = useFetchTodo();
  if (error) return <TodoTabPanelTexts text="データの取得に失敗しました" />
  if (!data) return <TodoTabPanelTexts text="loading..." />
  return (
    <TodoStatusSort data={data} />
  )
})
