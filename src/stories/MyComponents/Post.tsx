import "../../index.css";

export type User = {
    name: string,
    avatarURL: string
}

export type PostProps = {
    user: User,
    group: string,
    timestamp: Date,
    description: string,
    likes: number,
    comments: number
}

const Post = ({user, group, timestamp, description, likes, comments}: PostProps) => {
    return (
        <div>
            Post
        </div>
    )
}

export default Post