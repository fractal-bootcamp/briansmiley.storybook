import "../../index.css";
import { useState } from 'react'

export type User = {
    name: string,
    avatarURL?: string,
    onlineStatus: boolean,
    isCurrentUser: boolean
}

export type Message = {
    sender: User,
    content: string,
    timestamp: Date
}

type MessageProps = {
    message: Message,
    isFirst: boolean,
    isLast: boolean,
}
export type MessageThreadProps = Message[]

const Message = ({message, isFirst, isLast}: MessageProps) => {
    const [showTime, setShowTime] = useState(false)

    const {sender, content, timestamp} = message
    const bubbleColor = sender.isCurrentUser ? 'bg-[#74C2FF]' : 'bg-[#D8D8D8]'
    let sidesToRound = []
    sidesToRound.push(sender.isCurrentUser ? "rounded-l-2xl" : "rounded-r-2xl")
    if (isFirst) sidesToRound.push('rounded-t-2xl')
    if (isLast) sidesToRound.push('rounded-b-2xl')
    const bubbleBorderStyle = sidesToRound.join(" ")
    let margin = ['m-1.5']
    if (isFirst) margin.push("mt-2.5")
    if (isLast) margin.push("mb-2.5")
    const messageMargin = margin.join(" ")
    const justification = sender.isCurrentUser ? 'justify-end' : 'justify-start'
    const ChatBubble = () => {
        return (
        <div className={[bubbleBorderStyle, bubbleColor, 'text-[16px]', 'px-[25px]', 'py-[15px]', 'max-w-[70%]',].join(" ")}>
            {content}
        </div>
        )}
    const Avatar = () => {
        return (
            <div className={['flex', justification, 'w-[60px]', 'shrink-0'].join(" ")}>
                {isFirst ? <img className="w-[48px] h-[48px] rounded-full" src={sender.avatarURL} alt={sender.name}/> : ""}
            </div>
        )
    }
    const TimeSig = () => {
        const timeString = timestamp.toString();
        const splitTime = timeString.split(' ')
        const timeComponents = ['weekday', 'month', 'monthDay', 'year', 'time', 'GMTZone', 'Timezone']
        // time object has above properties to access
        let time: Record<string, string>= {}
        for (const [idx, component] of timeComponents.entries()) time[component] = splitTime[idx]

        const now = new Date()
        const sameDay = (
                            timestamp.getFullYear() === now.getFullYear() &&
                            timestamp.getMonth() === now.getMonth() &&
                            timestamp.getDate() === now.getDate()
                        ) 

        return (
            <div className={['flex', 'text-slate-400','text-[8px]', "items-end"].join(" ")} >
                    {showTime ? time.time : ""}
            </div>
        )
    }

    const items = [<TimeSig/>, <ChatBubble/>, <Avatar/>]
    const orderedItems = !sender.isCurrentUser ? items.reverse() : items;
    return (
        <div 
            className={["flex", messageMargin, justification].join(" ")}
            onMouseEnter={() => setShowTime(true)}
            onMouseLeave={() => setShowTime(false)}
            >
                {orderedItems}
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
            messages[index + 1].sender !== message.sender)
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