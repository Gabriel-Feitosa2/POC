import { ComponentStory } from '@storybook/react'
import ChipProductType from '.'

export default {
  Title: 'ChipProductType',
  component: ChipProductType,
}

const Template: ComponentStory<typeof ChipProductType> = (args) => <ChipProductType {...args} />

export const COMPRA = Template.bind({})
COMPRA.args = { label: 'COMPRA', productType: 'COMPRA' }

export const VENDA = Template.bind({})
VENDA.args = { label: 'VENDA', productType: 'VENDA' }

export const FIXACAO = Template.bind({})
FIXACAO.args = { label: 'FIXACAO', productType: 'FIXACAO' }
