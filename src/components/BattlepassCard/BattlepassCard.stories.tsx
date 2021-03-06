import React from 'react'
import { Story, Meta } from '@storybook/react'

import BattlepassCard from './BattlepassCard'
import { BattlepassCardProps } from './types'

export default {
  title: 'Components/BattlepassCard',
  component: BattlepassCard,
  argTypes: {
    image: {
      name: 'Image',
      type: { name: 'string' },
      defaultValue:
        'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
      description: 'Card Image',
      table: {
        category: 'Card',
        defaultValue: {
          summary:
            'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
        }
      }
    },
    rarity: {
      name: 'Rarity',
      options: [
        'darkSeries',
        'marvelSeries',
        'iconSeries',
        'slurpSeries',
        'shadowSeries',
        'frozenSeries',
        'dc',
        'lavaSeries',
        'gamingSeries',
        'starWars',
        'legendary',
        'epic',
        'rare',
        'uncommon',
        'common'
      ],
      defaultValue: 'rare',
      description: 'Rarity',
      table: {
        category: 'Card',
        type: {
          summary: 'more',
          detail: 'What is the rarity of the item?'
        },
        defaultValue: { summary: 'rare' }
      }
    },
    owned: {
      name: 'Owned',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Owned?',
      table: {
        category: 'Card',
        defaultValue: {
          summary: false
        }
      }
    },
    block: {
      name: 'Block',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Block?',
      table: {
        category: 'Card',
        defaultValue: {
          summary: false
        }
      }
    },
    unknown: {
      name: 'Unknown',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Unknown?',
      table: {
        category: 'Card',
        defaultValue: {
          summary: false
        }
      }
    },
    free: {
      name: 'Free',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Free?',
      table: {
        category: 'Free',
        defaultValue: {
          summary: false
        }
      }
    },
    text: {
      name: 'Text',
      type: { name: 'string' },
      defaultValue: 'Free!',
      description: 'Free Text',
      table: {
        category: 'Free',
        defaultValue: {
          summary: 'Free!'
        }
      }
    },
    tier: {
      name: 'Tier',
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Tier',
      table: {
        category: 'Tier',
        defaultValue: {
          summary: true
        }
      }
    },
    number: {
      name: 'Number',
      type: { name: 'number' },
      defaultValue: 1,
      description: 'Tier',
      table: {
        category: 'Tier',
        defaultValue: {
          summary: 1
        }
      }
    },
    onClick: {
      table: {
        category: 'Events'
      }
    }
  },
  decorators: [
    (Story) => (
      <div tw='max-width[11rem] height[15rem]'>
        <Story />
      </div>
    )
  ]
} as Meta

const Template: Story<BattlepassCardProps> = (args) => (
  <BattlepassCard {...args} />
)

export const Medium = Template.bind({})
Medium.args = {
  rarity: 'dc',
  number: 77,
  image:
    'https://media.fortniteapi.io/images/3715149722b1aad7d1837ad3e4432a25/transparent.png'
}
export const Small = Template.bind({})
Small.decorators = [
  (Story) => (
    <div tw='max-width[8rem] height[212px]'>
      <Story />
    </div>
  )
]
Small.args = {
  rarity: 'rare',
  number: 12,
  image:
    'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
}
export const Owned = Template.bind({})
Owned.args = {
  rarity: 'legendary',
  number: 71,
  owned: true,
  image:
    'https://media.fortniteapi.io/images/caf8ecac0931326fe550a6f67c8d1fdf/transparent.png'
}

export const Free = Template.bind({})
Free.args = {
  rarity: 'legendary',
  number: 93,
  free: true,
  image:
    'https://media.fortniteapi.io/images/d7711167bfd19b99320d0eb84e407946/transparent.png'
}

export const Unknown = Template.bind({})
Unknown.args = {
  rarity: 'rare',
  unknown: true
}
