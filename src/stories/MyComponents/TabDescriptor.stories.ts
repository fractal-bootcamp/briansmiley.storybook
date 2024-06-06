import type { Meta, StoryObj } from "@storybook/react";
import TabDescriptor, { mockUsers } from "./TabDescriptor";
const meta: Meta<typeof TabDescriptor> = {
  title: "Tab Descriptor",
  component: TabDescriptor
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { users: mockUsers }
};
