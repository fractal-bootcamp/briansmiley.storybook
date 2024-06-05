import "../../index.css";
export type User = {
    name: string,
    avatarURL?: string,
    onlineStatus: boolean,
    isCurrentUser: boolean
}
export type TabDescriptorProps = {
    users: User[]
}

const TabDescriptor = ({users}: TabDescriptorProps) => {
    return (
        <div>
            Dummy
        </div>
    )
}

export default TabDescriptor