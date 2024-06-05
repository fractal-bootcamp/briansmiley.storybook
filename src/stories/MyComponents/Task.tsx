import "../../index.css";
import { useState } from "react";

export type TaskProps = {
  name: string;
  id: string;
  description: string;
  completed: boolean;
  toggleFunction: () => void;
};
export default function Task(taskProps: TaskProps) {
  const { completed, toggleFunction, name, description } = taskProps
  const taskBg = completed ? "bg-[#E2FFE5]" : "bg-[#FFFFFF]";
  const boxBg = completed ? "bg-[#359845]" : "bg-[#FFFFFF]";

  return (
    <div className={`${taskBg} w-[462px] border rounded-lg p-3`}>
      <div className="flex items-center ">
        <button
          onClick={toggleFunction}
          className={`${boxBg} shrink-0 w-[25px] h-[25px] mx-2 rounded-lg border border-[#D8D8D8]`}
        ></button>
        <div className="flex flex-col">
          <div>{name}</div>
          <div className="text-[#7D7D7D] text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
}

export const withController = (Component: typeof Task) => {
  return (props: Omit<TaskProps, "toggleFunction">) => {
    const [completed, setCompleted] = useState(props.completed);
    return <Component
      {...props}
      toggleFunction={() => setCompleted(!completed)}
      completed={completed}
    />;
  };
};
