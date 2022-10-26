import { Tabs } from '@mantine/core'
import { memo } from 'react'

type Props = {
  text: string,
}

export const TodoTabPanelTexts = memo(({ text }: Props) => {
  return (
    <>
      <Tabs.Panel value="all" pt="md">{text}</Tabs.Panel>
      <Tabs.Panel value="incomplete" pt="md">{text}</Tabs.Panel>
      <Tabs.Panel value="complete" pt="md">{text}</Tabs.Panel>
    </>
  )
})
