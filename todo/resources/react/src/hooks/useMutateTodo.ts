import { apiUrl } from "../utilities/apiUrl";
import axios from "axios";
import { useCallback, useRef } from "react";
import { useSWRConfig } from "swr";

export const useMutateTodo = () => {
  const { mutate } = useSWRConfig();
  const inputEl = useRef<HTMLInputElement>(null);

  // todo追加
  const addTodoItem = useCallback(async () => {
    if (inputEl.current?.value === "") {
      return;
    }
    const newTodoItem: TPostTodo = { task: inputEl.current!.value, done: 0 };
    await axios.post(apiUrl, newTodoItem);
    mutate(apiUrl);
    inputEl.current!.value = "";
  }, []);

  // todo削除
  const deleteTodoItem = useCallback(async (id: string) => {
    await axios.delete(`${apiUrl}/${id}`);
    mutate(apiUrl);
  }, []);

  // todoの状態切り替え（完了済み⇔未完了）
  const toggleTodoStatus = useCallback(async (todo: TUpdateTodo) => {
    const updateTodo = { done: todo.done == 0 ? 1 : 0 }
    await axios.put(`${apiUrl}/${todo.id}`, updateTodo);
    mutate(apiUrl);
  }, []);

  return { inputEl, addTodoItem, deleteTodoItem, toggleTodoStatus };
}
