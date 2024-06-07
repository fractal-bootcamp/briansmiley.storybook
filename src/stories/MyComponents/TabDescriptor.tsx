import "./TabDescriptor.scss";
import { useState } from "react";
export type User = {
  name: string;
  avatarURL?: string;
  bio: string;
};
export type TabDescriptorProps = {
  users: User[];
};
type TabProps = {
  user: User;
  selectFunc: () => void;
  isCurrentUser: boolean;
};
export const mockUsers: User[] = [
  {
    name: "Brian",
    avatarURL:
      "https://s3-alpha-sig.figma.com/img/48fb/0979/b0fbdd8e320622de39475b562ddad56d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcuGV23RG8rVq1PMQPkSLmqZmYBkCAgeW0JY-SkVMG7jp4Ye~eii5l0sgfMuYwLqkwPMSgVIZXUX6wz3d-jiXHxGKSlvkqwY7rMSNFPK~kFjK6Qovpzue3yLdxx9n5I7gugFUAPhlmBFqeRQZ3uHV9n0YbKMZBfdUv3pENP8qC14abVvddt~qvYQFaPmxhVv9xb2BAXv5yCIj61X6vr0YpxVhAO8-iThs5s9YdwahRw9t7~AmycNAuVmO9fk2wdlHn8p20fgV6QeoQNkvl-K-nSrVJWLbvDAS6A4l9xf2Udm2gIl8REAvakXNBjat0xbNIQfUvsqhY2tKbHC6NSX7g__",
    bio: "This is Brian's bio"
  },
  {
    name: "Sarah",
    avatarURL:
      "https://s3-alpha-sig.figma.com/img/237f/92b8/c3fa630880a17b97a1f864fb528f0aa2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bz3DpdYQs4hJKpYTvg4q~Whe93ds7JQmZiH8fGAvST0JgD5-yq18RxAavMSdiP0XyASFvMiP8gMJ00Cc6OeCntuiNKDcoXmHNffxRV6Gs82UvZNpzgQ16KY1XbKKkfpeaSopFiYB9~3h~A02UC9mhm6AZwO9k6~edNyM-7exEObB8gbxwV-nlIfJKto1CD4tASTk7jbNNXBvia79zrSnKCNqM0waz7H6ldPJ192SX6uFVO25608yrnzDbaB49Oj6cC6TTPdmTLsGG1S-vK1dIENopXiuhNDIyRQjojeP~4E16z7zQthokJPffXT5BjAV0DS1oUINGahQomOwaYSAvg__",
    bio: "This is Sarah's longer bio blah blah blah blah blah blah blah lbha blahlsgihdlgtkahgfleakdfjlakef jaelkj aelgf kajegf lake kejflakjvale kejeal fkjae lfkjae flkjae"
  }
];

const UserCard = ({ avatarURL, bio, name }: User) => {
  return (
    <div className="user-card">
      <img className="card-avatar" src={avatarURL} alt={name} />
      <div className="user-bio">{bio}</div>
    </div>
  );
};
const Tab = ({ user, selectFunc, isCurrentUser }: TabProps) => {
  const style = ["user-tab", isCurrentUser ? "current-user" : ""].join(" ");
  return (
    <div className={style} onClick={selectFunc}>
      {user.name}
    </div>
  );
};
const TabDescriptor = ({ users }: TabDescriptorProps) => {
  const [currentUser, setCurrentUser] = useState(users[0]);

  return (
    <div className="tab-descriptor">
      <div className="tab-row">
        {users.map(user => (
          <Tab
            user={user}
            isCurrentUser={currentUser === user}
            selectFunc={() => setCurrentUser(user)}
          />
        ))}
      </div>
      {<UserCard {...currentUser} />}
    </div>
  );
};

export default TabDescriptor;
