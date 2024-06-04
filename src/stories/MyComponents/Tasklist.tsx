import "../../index.css"
import Task, {TaskProps} from './Task'

export type TaskListProps = {
    tasks: TaskProps[]
}

export const TaskList = ({tasks}:TaskListProps) => {
    return (
        <div>
            {tasks.map(task => <Task {...task} key={task.id}/>)}
        </div>
    )
}