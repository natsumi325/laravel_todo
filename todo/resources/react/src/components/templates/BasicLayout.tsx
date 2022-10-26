import { AppShell, Header } from '@mantine/core'
import { ReactNode } from 'react';
import { BasicHeader } from '../organisms/BasicHeader';

type Props = {
  children: ReactNode;
}

export const BasicLayout = ({ children }: Props) => {
  return (
    <AppShell
      header={<BasicHeader/>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'initial' },
      })}
    >
      {children}
    </AppShell>
  )
}
