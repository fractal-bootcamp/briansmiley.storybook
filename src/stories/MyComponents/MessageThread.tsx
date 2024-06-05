import "../../index.css";
export type User = {
    name: string,
    avatarURL?: string,
    onlineStatus: boolean,
    isCurrentUser: boolean
}

export type Message = {
    sender: User,
    content: string,
    timestamp: Date,
}

type MessageProps = {
    message: Message,
    isFirst: boolean,
    isLast: boolean
}
export type MessageThreadProps = Message[]

const Message = ({message, isFirst, isLast}: MessageProps) => {
    const {sender, content, timestamp} = message
    const bubbleColor = sender.isCurrentUser ? 'bg-[#74C2FF]' : 'bg-[#D8D8D8]'
    let sidesToRound = []
    sidesToRound.push(sender.isCurrentUser ? "rounded-l-lg" : "rounded-r-lg")
    if (isFirst) sidesToRound.push('rouned-t-lg')
    if (isLast) sidesToRound.push('rounded-b-lg')
    const bubbleBorderStyle = sidesToRound.join(" ")
    const ChatBubble = () => {
        return (
        <div className={[bubbleBorderStyle, bubbleColor, 'p-2'].join(" ")}>
            {content}
        </div>
        )}
    const Avatar = () => {
        return (
            <>
                <img className="w-[48px] h-[48px] rounded-full" src={sender.avatarURL} alt={sender.name}/>
            </>
        )
    }
    if (sender.isCurrentUser) 
        return (
            <div className="flex justify-end">
                <div>
                    <ChatBubble/>
                    {isFirst ? <Avatar/> : ""}
                </div>
            </div>
        )
}
const MessageThread = ({messages} : {messages: MessageThreadProps}) => {
    const enhancedMessages: MessageProps[] = messages.map( (message, index) => {
        let isFirst = false;
        let isLast = false;
        if (index == 0 || 
            messages[index - 1].sender !== message.sender)
                isFirst = true;
        if (index == messages.length-1 ||
            messages[index + 1].sender === message.sender)
                isLast = true;
        return {message, isFirst, isLast}
    })
    return (
        <div>
            {enhancedMessages.map( enhancedMessage => {
                return (
                    <Message {...enhancedMessage}/>
                )
            })}
        </div>
    )
}

export default MessageThread