import "../../index.css";

export type User = {
    name: string,
    avatarUrl: string
}

export type PostProps = {
    user: User,
    group: string,
    timestamp: Date,
    thumbnailUrl: string,
    description: string,
    likes: number,
    comments: number
}

const Post = ({user, group, timestamp, thumbnailUrl, description, likes, comments}: PostProps) => {
    const minutesSince = Math.round((Date.now() - timestamp.getTime())/60000)
    return (
        <div className="flex items-start gap-3">
            <img className="w-[48px] h-[48px] rounded-full" src={user.avatarUrl} alt={user.name}/>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div>
                        <span>{user.name}</span>
                        <span className="text-[#828282]"> in {group}</span>
                    </div>
                    <div className="text-[#828282]" >{minutesSince} min ago</div>
                </div>
                <div className="w-[458px] h-[458px] overflow-hidden mt-4">
                    <img src={thumbnailUrl}/>
                </div>
                <div className="text-[20px] my-4">
                    {description}
                </div>
                <div className="flex gap-3 font-semibold text-[16px]">
                    <span>{likes} likes</span>
                    <span>{comments} comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post