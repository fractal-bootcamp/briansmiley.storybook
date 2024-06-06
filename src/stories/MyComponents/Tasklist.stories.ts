import type { Meta, StoryObj } from "@storybook/react";
import { TaskList, mockTasks } from "./Tasklist";

const meta: Meta<typeof TaskList> = {
  title: "TaskList",
  component: TaskList
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: mockTasks
};
