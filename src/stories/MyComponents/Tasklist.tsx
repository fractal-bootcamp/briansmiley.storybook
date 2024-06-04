import "../../index.css"

export type TaskProps = {
    name: string,
    description: string,
    completed: boolean,
}

export type TaskListProps = {
    tasks: TaskProps[]
}


function Task({name, description, completed}:TaskProps) {
    return (
        <div>
            {name}
        </div>
    )
}

export const TaskList = ({tasks}:TaskListProps) => {
    return (
        <div>
            {tasks.map(task => <Task {...task}/>)}
        </div>
    )
}