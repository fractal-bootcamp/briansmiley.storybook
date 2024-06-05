import type { Meta, StoryObj } from '@storybook/react'
import Post, { User, PostProps } from './Post'

const meta: Meta<typeof Post> = {
    title: 'Post',
    component: Post
}

export default meta

type Story = StoryObj<typeof meta>

const users = {
    Helena: {
        name: "Helena",
        avatarURL: "https://s3-alpha-sig.figma.com/img/48fb/0979/b0fbdd8e320622de39475b562ddad56d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcuGV23RG8rVq1PMQPkSLmqZmYBkCAgeW0JY-SkVMG7jp4Ye~eii5l0sgfMuYwLqkwPMSgVIZXUX6wz3d-jiXHxGKSlvkqwY7rMSNFPK~kFjK6Qovpzue3yLdxx9n5I7gugFUAPhlmBFqeRQZ3uHV9n0YbKMZBfdUv3pENP8qC14abVvddt~qvYQFaPmxhVv9xb2BAXv5yCIj61X6vr0YpxVhAO8-iThs5s9YdwahRw9t7~AmycNAuVmO9fk2wdlHn8p20fgV6QeoQNkvl-K-nSrVJWLbvDAS6A4l9xf2Udm2gIl8REAvakXNBjat0xbNIQfUvsqhY2tKbHC6NSX7g__",

    }
}
const post = {
    user: users.Helena,
    group: "Group name",
    timestamp: new Date(),
    description: "Post description",
    likes: 21,
    comments: 4
}
export const Primary: Story = {
    args: post
}