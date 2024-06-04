import type { Meta, StoryObj } from '@storybook/react'
import { TaskList, TaskListProps } from './Tasklist'
import { fn } from '@storybook/test'

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
            id: "1",
            description: "do stuff",
            completed: false,
        },
        {
            name: 'second task',
            id: "2",
            description: "do more stuff",
            completed: true,
        },
        {
            name: 'Sweep the Kitchen',
            id: "3",
            description: "Get under the cabinets, do a good job",
            completed: false,
        },
        {
            name: 'Walk the dog to the park before noon',
            id: "4",
            description: "bow wowbow wowbow wowbow wowbow wowbow wowbow wowbow wowbow wow",
            completed: true,
        }
    ]
}

export const Primary: Story = {
    args: fakeTasks
}

