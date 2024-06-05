import "../../index.css";
import Task, { TaskProps } from "./Task";
import { useState, useEffect } from "react";

export type TaskListProps = {
  tasks: Omit<TaskProps, "toggleFunction">[];
};

export const TaskList = ({ tasks }: TaskListProps) => {
  const [taskList, setTaskList] = useState(tasks);
  // const toggleCompleted = (t: TaskProps) => () => {
  //     setTaskList(taskList.map( task =>
  //         task == t ?
  //             Object.assign({},t,{completed: !t.completed})
  //     ))}

  const toggleCompleted = (taskId: string) => {
    const oldTask = taskList.find(task => task.id === taskId);
    if (!oldTask) return;
    const newTask = { ...oldTask, completed: !oldTask.completed };
    const newTaskList = taskList.map(task =>
      task.id === taskId ? newTask : task
    );

    const sortedTaskList = sortByCompletion(newTaskList);
    setTaskList(sortedTaskList);
};

const sortByCompletion = (list: Omit<TaskProps, "toggleFunction">[]) => {
    const completedTasks = list.filter(task => task.completed);
    const uncompletedTasks = list.filter(task => !task.completed);
    return uncompletedTasks.concat(completedTasks)
}

  return (
    <div className="flex flex-col gap-4">
      {taskList.map(task => (
        <Task
          {...task}
          key={task.id}
          toggleFunction={() => toggleCompleted(task.id)}
        />
      ))}
    </div>
  );
};
