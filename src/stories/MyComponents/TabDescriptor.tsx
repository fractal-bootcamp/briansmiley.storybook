import "./TabDescriptor.scss";
export type User = {
    name: string,
    avatarURL?: string,
    onlineStatus: boolean,
    isCurrentUser: boolean
}
export type TabDescriptorProps = {
    users: User[]
}

const Tab = ({user}:{user:User}) => {
    return (
        <div>
            {user.name}
        </div>
    )
}
const TabDescriptor = ({users}: TabDescriptorProps) => {
    return (
        <div>
            {users.map( user => {
                return <Tab user={user}/>
            })}
        </div>
    )
}

export default TabDescriptor