import type { Meta, StoryObj } from '@storybook/react'
import Task, {TaskProps} from './Task'

const meta: Meta<typeof Task> = {
    title: 'Task',
    component: Task
}

export default meta

type Story = StoryObj<typeof meta>

const fakeTasks: TaskProps[] = [
        {
            name: 'first task',
            id: "1",
            description: "do stuff",
            completed: false,
        },
        {
            name: 'second task',
            id: "2",
            description: "do more stuff",
            completed: true,
        }
    ]

export const Primary: Story = {
    args: fakeTasks[0]
}

