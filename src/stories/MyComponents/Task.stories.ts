import type { Meta, StoryObj } from '@storybook/react'
import Task, {TaskProps, withController} from './Task'
import { ComponentProps } from 'react'

const meta: Meta<UncontrolledTask> = {
    title: 'Task',
    component: withController(Task)
}

export default meta

type Story = StoryObj<typeof meta>

type UncontrolledTask = ReturnType<typeof withController>

type UncontrolledTaskProps = ComponentProps<UncontrolledTask>

const fakeTasks: UncontrolledTaskProps[] = [
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
