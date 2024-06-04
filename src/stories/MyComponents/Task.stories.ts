import type { Meta, StoryObj } from '@storybook/react'
import Task, {TaskProps} from './Task'

const meta: Meta<typeof Task> = {
    title: 'Task',
    component: Task
}

export default meta

type Story = StoryObj<typeof meta>
const toggleComplete = (task: TaskProps) => () => {
    task.completed = !task.completed
}
const fakeTasks: TaskProps[] = [
        {
            name: 'first task',
            id: "1",
            description: "do stuff",
            completed: true,
        },
        {
            name: 'second task',
            id: "2",
            description: "do more stuff",
            completed: false,
        }
    ]

export const Primary: Story = {
    args: fakeTasks[0]
}
export const Incomplete: Story = {
    args: fakeTasks[1]
}
