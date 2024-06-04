import type { Meta, StoryObj } from '@storybook/react'
import { TaskList, TaskListProps } from './Tasklist'

const meta: Meta<typeof TaskList> = {
    title: 'TaskList',
    component: TaskList
}

export default meta

type Story = StoryObj<typeof meta>

const fakeTasks: TaskListProps = {
    tasks: [
        {
            name: 'first task',
            key: "1",
            description: "do stuff",
            completed: false,
        },
        {
            name: 'second task',
            key: "2",
            description: "do more stuff",
            completed: true,
        }
    ]
}

export const Primary: Story = {
    args: fakeTasks
}

