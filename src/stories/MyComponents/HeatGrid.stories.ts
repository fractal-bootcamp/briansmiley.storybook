import type { Meta, StoryObj } from '@storybook/react'
import HeatGrid from './HeatGrid'

const meta: Meta<typeof HeatGrid> = {
    title: 'Heat Grid',
    component: HeatGrid
}

export default meta

type Story = StoryObj<typeof meta>

const mockHeatGrid = Array(5).fill(0).map( () => Array.from({length: 7}, () => (Math.round(Math.random() * 100))))

export const Primary: Story = {
    args: {gridValues: mockHeatGrid}
}