import { useFavicon } from "@mantine/hooks";
import { useCallback, useState } from "react";
export const useChangeFavicon = () => {
  // favicon
  const favicon1 = 'http://127.0.0.1:8000/favicon.svg'
  const favicon2 = 'http://127.0.0.1:8000/favicon2.svg'
  const [favicon, setFavicon] = useState(favicon1);
  const setBallPenFavicon = useCallback(() => setFavicon(favicon1), [favicon]);
  const setCheckBoxFavicon = useCallback(() => setFavicon(favicon2), [favicon]);
  useFavicon(favicon);

  return { favicon1, favicon2, favicon, setFavicon, setBallPenFavicon, setCheckBoxFavicon }
};