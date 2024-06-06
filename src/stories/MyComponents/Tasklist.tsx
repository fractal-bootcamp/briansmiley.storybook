import "../../index.css";
import Task, { TaskProps } from "./Task";
import { useState } from "react";

export type TaskListProps = {
  tasks: Omit<TaskProps, "toggleFunction">[];
};
export const mockTasks: TaskListProps = {
  tasks: [
    {
      name: "first task",
      id: "1",
      description: "do stuff",
      completed: false
    },
    {
      name: "second task",
      id: "2",
      description: "do more stuff",
      completed: true
    },
    {
      name: "Sweep the Kitchen",
      id: "3",
      description: "Get under the cabinets, do a good job",
      completed: false
    },
    {
      name: "Walk the dog to the park before noon",
      id: "4",
      description:
        "bow wowbow wowbow wowbow wowbow wowbow wowbow wowbow wowbow wow",
      completed: true
    }
  ]
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
    return uncompletedTasks.concat(completedTasks);
  };

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
