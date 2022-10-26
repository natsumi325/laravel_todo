import { memo } from 'react'
import { TodoTabPanel } from './TodoTabPanel'

type Props = {
  data: Array<TTodo>,
}

export const TodoStatusSort =memo(({ data }: Props) => {
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
}
)