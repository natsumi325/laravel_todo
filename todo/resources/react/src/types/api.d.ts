type TTodo = {
  "id": string,
  "task": string,
  "created_at": date,
  "updated_at": date,
  "done": 0 | 1
}

type TPostTodo = Pick<TTodo, "task" | "done">

type TUpdateTodo = Pick<TTodo, "id" | "task" | "done">