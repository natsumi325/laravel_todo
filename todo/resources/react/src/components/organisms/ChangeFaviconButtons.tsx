import { Button, Group } from "@mantine/core";
import { IconCheckbox, IconBallpen } from "@tabler/icons";
import { memo } from "react";
import { useChangeFavicon } from "../../hooks/useChangeFavicon";

export const ChangeFaviconButtons = memo(() => {
  const { favicon1, favicon, setBallPenFavicon, setCheckBoxFavicon } = useChangeFavicon();
  return (
    <>
      {favicon === favicon1
        ? <Button size='xs' variant="outline"
          onClick={setCheckBoxFavicon}>
          <Group spacing="xs">
            <IconCheckbox size={18} /> set favicon
          </Group>
        </Button>
        : <Button size='xs' variant="outline"
          onClick={setBallPenFavicon}>
          <Group spacing="xs">
            <IconBallpen size={18} /> set favicon
          </Group>
        </Button>}
    </>
  )
})
