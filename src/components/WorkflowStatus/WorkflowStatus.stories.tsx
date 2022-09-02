import { ComponentStory } from '@storybook/react'
import WorkflowStatus from '.'

export default {
  Title: 'WorkflowStatus',
  component: WorkflowStatus,
}

const Template: ComponentStory<typeof WorkflowStatus> = (args) => <WorkflowStatus {...args} />

export const APPROVED = Template.bind({})
APPROVED.args = { productType: 'APPROVED' }

export const NEW = Template.bind({})
NEW.args = { productType: 'NEW' }

export const PENDING = Template.bind({})
PENDING.args = { productType: 'PENDING' }

export const REJECTED = Template.bind({})
REJECTED.args = { productType: 'REJECTED' }
