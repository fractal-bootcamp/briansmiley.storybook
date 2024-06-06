import type { Meta, StoryObj } from "@storybook/react";
import MessageThread, { fakeMessages } from "./MessageThread";
const meta: Meta<typeof MessageThread> = {
  title: "Message Thread",
  component: MessageThread
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { messages: fakeMessages }
};
