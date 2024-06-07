import "../../index.css";
import { useState } from "react";

export type User = {
  name: string;
  avatarURL?: string;
  onlineStatus: boolean;
  isCurrentUser: boolean;
};

export type Message = {
  sender: User;
  content: string;
  timestamp: Date;
};

type MessageProps = {
  message: Message;
  isFirst: boolean;
  isLast: boolean;
};
export type MessageThreadProps = Message[];

const users: Record<string, User> = {
  Brian: {
    name: "Brian",
    onlineStatus: false,
    isCurrentUser: true,
    avatarURL:
      "https://s3-alpha-sig.figma.com/img/48fb/0979/b0fbdd8e320622de39475b562ddad56d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcuGV23RG8rVq1PMQPkSLmqZmYBkCAgeW0JY-SkVMG7jp4Ye~eii5l0sgfMuYwLqkwPMSgVIZXUX6wz3d-jiXHxGKSlvkqwY7rMSNFPK~kFjK6Qovpzue3yLdxx9n5I7gugFUAPhlmBFqeRQZ3uHV9n0YbKMZBfdUv3pENP8qC14abVvddt~qvYQFaPmxhVv9xb2BAXv5yCIj61X6vr0YpxVhAO8-iThs5s9YdwahRw9t7~AmycNAuVmO9fk2wdlHn8p20fgV6QeoQNkvl-K-nSrVJWLbvDAS6A4l9xf2Udm2gIl8REAvakXNBjat0xbNIQfUvsqhY2tKbHC6NSX7g__"
  },
  Sarah: {
    name: "Sarah",
    onlineStatus: true,
    isCurrentUser: false,
    avatarURL:
      "https://s3-alpha-sig.figma.com/img/237f/92b8/c3fa630880a17b97a1f864fb528f0aa2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bz3DpdYQs4hJKpYTvg4q~Whe93ds7JQmZiH8fGAvST0JgD5-yq18RxAavMSdiP0XyASFvMiP8gMJ00Cc6OeCntuiNKDcoXmHNffxRV6Gs82UvZNpzgQ16KY1XbKKkfpeaSopFiYB9~3h~A02UC9mhm6AZwO9k6~edNyM-7exEObB8gbxwV-nlIfJKto1CD4tASTk7jbNNXBvia79zrSnKCNqM0waz7H6ldPJ192SX6uFVO25608yrnzDbaB49Oj6cC6TTPdmTLsGG1S-vK1dIENopXiuhNDIyRQjojeP~4E16z7zQthokJPffXT5BjAV0DS1oUINGahQomOwaYSAvg__"
  }
};

export const fakeMessages: Message[] = [
  {
    sender: users.Brian,
    content:
      "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    timestamp: new Date("4 Jun 2023 19:00")
  },
  {
    sender: users.Brian,
    content:
      "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet. ",
    timestamp: new Date("4 Jun 2024 19:01")
  },
  {
    sender: users.Sarah,
    content:
      "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
    timestamp: new Date("4 Jun 2024 19:31")
  },
  {
    sender: users.Brian,
    content:
      "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
    timestamp: new Date("4 Jun 2024 19:33")
  }
];
const Message = ({ message, isFirst, isLast }: MessageProps) => {
  const [showTime, setShowTime] = useState(false);

  const { sender, content, timestamp } = message;
  const bubbleColor = sender.isCurrentUser ? "bg-[#74C2FF]" : "bg-[#D8D8D8]";
  let sidesToRound = [];
  sidesToRound.push(sender.isCurrentUser ? "rounded-l-2xl" : "rounded-r-2xl");
  if (isFirst) sidesToRound.push("rounded-t-2xl");
  if (isLast) sidesToRound.push("rounded-b-2xl");
  const bubbleBorderStyle = sidesToRound.join(" ");
  let margin = ["m-1.5"];
  if (isFirst) margin.push("mt-2.5");
  if (isLast) margin.push("mb-2.5");
  const messageMargin = margin.join(" ");
  const justification = sender.isCurrentUser ? "justify-end" : "justify-start";
  const ChatBubble = () => {
    return (
      <div
        className={[
          bubbleBorderStyle,
          bubbleColor,
          "text-[16px]",
          "px-[25px]",
          "py-[15px]",
          "max-w-[70%]"
        ].join(" ")}
      >
        {content}
      </div>
    );
  };
  const Avatar = () => {
    return (
      <div
        className={["flex", justification, "w-[60px]", "shrink-0"].join(" ")}
      >
        {isFirst ? (
          <img
            className="w-[48px] h-[48px] rounded-full"
            src={sender.avatarURL}
            alt={sender.name}
          />
        ) : (
          ""
        )}
      </div>
    );
  };
  const TimeSig = () => {
    const timeString = timestamp.toString();
    const splitTime = timeString.split(" ");
    const timeComponents = [
      "weekday",
      "month",
      "monthDay",
      "year",
      "time",
      "GMTZone",
      "Timezone"
    ];
    // time object has above properties to access
    let time: Record<string, string> = {};
    for (const [idx, component] of timeComponents.entries())
      time[component] = splitTime[idx];

    // const now = new Date();
    // const sameDay =
    //   timestamp.getFullYear() === now.getFullYear() &&
    //   timestamp.getMonth() === now.getMonth() &&
    //   timestamp.getDate() === now.getDate();

    return (
      <div
        className={["flex", "text-slate-400", "text-[8px]", "items-end"].join(
          " "
        )}
      >
        {showTime ? time.time : ""}
      </div>
    );
  };

  const items = [<TimeSig />, <ChatBubble />, <Avatar />];
  const orderedItems = !sender.isCurrentUser ? items.reverse() : items;
  return (
    <div
      className={["flex", messageMargin, justification].join(" ")}
      onMouseEnter={() => setShowTime(true)}
      onMouseLeave={() => setShowTime(false)}
    >
      {orderedItems}
    </div>
  );
};
const MessageThread = ({ messages }: { messages: MessageThreadProps }) => {
  const enhancedMessages: MessageProps[] = messages.map((message, index) => {
    let isFirst = false;
    let isLast = false;
    if (index == 0 || messages[index - 1].sender !== message.sender)
      isFirst = true;
    if (
      index == messages.length - 1 ||
      messages[index + 1].sender !== message.sender
    )
      isLast = true;
    return { message, isFirst, isLast };
  });
  return (
    <div className="w-[100%]">
      {enhancedMessages.map(enhancedMessage => {
        return <Message {...enhancedMessage} />;
      })}
    </div>
  );
};

export default MessageThread;
