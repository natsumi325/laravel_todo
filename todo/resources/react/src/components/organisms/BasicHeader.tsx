import { Header, Text, ActionIcon, useMantineColorScheme, Group, Box } from '@mantine/core'
import { IconSun, IconMoonStars, IconCheckbox } from '@tabler/icons';
import { ChangeFaviconButtons } from './ChangeFaviconButtons';

export const BasicHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Header height={70} sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    })}>
      <Box p='md' sx={(theme) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "100%",
        maxWidth: '1280px',
        margin: 'auto',
      })}>
        <Group spacing="xs">
          <IconCheckbox size={24} color='#228be6' />
          <Text size={24} color='#228be6'>TODO APP</Text>
        </Group>
        <Group>
          <ChangeFaviconButtons />
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </Group >
      </Box>
    </Header >
  )
}
