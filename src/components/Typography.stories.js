import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, array } from '@storybook/addon-knobs'
import { Title, Subtitle, Paragraph, List, ListItem } from './Typography'

storiesOf('Typography|Title')
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Title>{text('Text', 'Hello Storybook. I am a title.')}</Title>
  ))

storiesOf('Typography|Subtitle')
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Subtitle>{text('Text', 'Hello Storybook. I am a subtitle.')}</Subtitle>
  ))

storiesOf('Typography|Paragraph')
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Default', () => (
    <Paragraph>
      {text(
        'Text',
        "Hello Storybook. I am a Paragraph. I can contan a lot of text but I will retain my measure of ~60 characters. This is some more text to make this look more like a paragraph. OK fine here's some more. I'm done now."
      )}
    </Paragraph>
  ))

storiesOf('Typography|List')
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Default', () => {
    const defaultItems = [
      'This is a list',
      "Here's another item",
      'Hey one more why not',
    ]

    const items = array('Items', defaultItems)

    return (
      <List style={{ marginTop: '-0.5rem' }}>
        {items.map(item => (
          <ListItem key={item} mt={2}>
            {item}
          </ListItem>
        ))}
      </List>
    )
  })
