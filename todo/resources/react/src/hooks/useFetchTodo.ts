import { fetcher } from "../utilities/fetcher";
import { apiUrl } from "../utilities/apiUrl";
import useSWR from "swr";


export const useFetchTodo = () => {
  const { data, error } = useSWR<Array<TTodo>>(apiUrl, fetcher)
  return { data, error };
};