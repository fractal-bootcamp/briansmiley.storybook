import "../../index.css"

export type TaskProps = {
    name: string,
    id: string,
    description: string,
    completed: boolean,
}

export default function Task({name, description, completed}:TaskProps) {
    return (
        <div>
            {name}
        </div>
    )
}