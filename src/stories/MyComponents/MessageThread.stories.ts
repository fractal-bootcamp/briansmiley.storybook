import type { Meta, StoryObj } from '@storybook/react'
import MessageThread, {MessageThreadProps, User, Message} from './MessageThread'
const meta: Meta<typeof MessageThread> = {
    title: 'Message Thread',
    component: MessageThread
}

export default meta

type Story = StoryObj<typeof meta>

const users: Record<string, User> = {
    "Brian": {
        name: "Brian",
        onlineStatus: false,
        isCurrentUser: true,
        avatarURL: "https://s3-alpha-sig.figma.com/img/48fb/0979/b0fbdd8e320622de39475b562ddad56d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcuGV23RG8rVq1PMQPkSLmqZmYBkCAgeW0JY-SkVMG7jp4Ye~eii5l0sgfMuYwLqkwPMSgVIZXUX6wz3d-jiXHxGKSlvkqwY7rMSNFPK~kFjK6Qovpzue3yLdxx9n5I7gugFUAPhlmBFqeRQZ3uHV9n0YbKMZBfdUv3pENP8qC14abVvddt~qvYQFaPmxhVv9xb2BAXv5yCIj61X6vr0YpxVhAO8-iThs5s9YdwahRw9t7~AmycNAuVmO9fk2wdlHn8p20fgV6QeoQNkvl-K-nSrVJWLbvDAS6A4l9xf2Udm2gIl8REAvakXNBjat0xbNIQfUvsqhY2tKbHC6NSX7g__"
    },
    "Sarah": {
        name: "Sarah",
        onlineStatus: true,
        isCurrentUser: false,
        avatarURL: "https://s3-alpha-sig.figma.com/img/237f/92b8/c3fa630880a17b97a1f864fb528f0aa2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bz3DpdYQs4hJKpYTvg4q~Whe93ds7JQmZiH8fGAvST0JgD5-yq18RxAavMSdiP0XyASFvMiP8gMJ00Cc6OeCntuiNKDcoXmHNffxRV6Gs82UvZNpzgQ16KY1XbKKkfpeaSopFiYB9~3h~A02UC9mhm6AZwO9k6~edNyM-7exEObB8gbxwV-nlIfJKto1CD4tASTk7jbNNXBvia79zrSnKCNqM0waz7H6ldPJ192SX6uFVO25608yrnzDbaB49Oj6cC6TTPdmTLsGG1S-vK1dIENopXiuhNDIyRQjojeP~4E16z7zQthokJPffXT5BjAV0DS1oUINGahQomOwaYSAvg__"
    }
}

const fakeMessages: Message[] = [
    {
        sender: users.Brian,
        content:"I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
        timestamp: new Date('4 Jun 2023 19:00')
    },
    {
        sender: users.Brian,
        content:"I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet. ",
        timestamp: new Date('4 Jun 2024 19:01')
    },
    {
        sender: users.Sarah,
        content:"I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
        timestamp: new Date('4 Jun 2024 19:31')
    },
    {
        sender: users.Brian,
        content:"I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
        timestamp: new Date('4 Jun 2024 19:33')
    }
]
export const Primary: Story = {
    args: {messages: fakeMessages}
}