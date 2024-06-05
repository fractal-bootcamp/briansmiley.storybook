import type { Meta, StoryObj } from '@storybook/react'
import Post, { User, PostProps } from './Post'

const meta: Meta<typeof Post> = {
    title: 'Post',
    component: Post
}

export default meta

type Story = StoryObj<typeof meta>

const users: Record<string,User> = {
    Helena: {
        name: "Helena",
        avatarUrl: "https://s3-alpha-sig.figma.com/img/48fb/0979/b0fbdd8e320622de39475b562ddad56d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcuGV23RG8rVq1PMQPkSLmqZmYBkCAgeW0JY-SkVMG7jp4Ye~eii5l0sgfMuYwLqkwPMSgVIZXUX6wz3d-jiXHxGKSlvkqwY7rMSNFPK~kFjK6Qovpzue3yLdxx9n5I7gugFUAPhlmBFqeRQZ3uHV9n0YbKMZBfdUv3pENP8qC14abVvddt~qvYQFaPmxhVv9xb2BAXv5yCIj61X6vr0YpxVhAO8-iThs5s9YdwahRw9t7~AmycNAuVmO9fk2wdlHn8p20fgV6QeoQNkvl-K-nSrVJWLbvDAS6A4l9xf2Udm2gIl8REAvakXNBjat0xbNIQfUvsqhY2tKbHC6NSX7g__",

    }
}
const post: PostProps = {
    user: users.Helena,
    group: "Group name",
    timestamp: new Date(),
    thumbnailUrl: "https://s3-alpha-sig.figma.com/img/e708/8392/7f135f87cd002a7122bb6b6bd3722bc6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nzZ-qWJfFOpviBdvFOOC~QzkhhDeI-tQ5aPXQGP8pWVjdrp~8MLtOgz9K6z5lrtJAqx3l~~DmWKstP1IjH3QxdHQIvhTD2-W1k5GVNd08o19THS7uzRUhsrWqi6MuzJb1ikHl8rEyz7cOyzYSIUvtojJ-5VOH6xMKgCAa0zEjjR9OKFtG-ves8Tz8N6qq3XnrMbWOPeyXtalhCgNbvdccFeBaoi4AmhG3iLuXtM-A1sTSmuuewf7N4HRF7jh~UrXfoNxuEJC~nJgC7rQX-zOwDWN~ZYdfzhkJOez86iE4F19Gy7Yr~nH4RhjwaQQQjJv7~Mh7Lt91-~dK54LiqqNvA__",
    description: "Post description",
    likes: 21,
    comments: 4
}
export const Primary: Story = {
    args: post
}