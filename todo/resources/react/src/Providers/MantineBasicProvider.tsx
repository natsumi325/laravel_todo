import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ReactNode, useState } from 'react'

type Props = {
  children: ReactNode;
}

export const MantineBasicProvider = ({ children }: Props) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
