import "./index.css";
import HeatGrid, { mockHeatGrid } from "./stories/MyComponents/HeatGrid";
import TabDescriptor, { mockUsers } from "./stories/MyComponents/TabDescriptor";
import MessageThread, {
  fakeMessages
} from "./stories/MyComponents/MessageThread";
import { TaskList, mockTasks } from "./stories/MyComponents/Tasklist";
import { useState } from "react";
type ComponentList = {
  name: string;
  component: JSX.Element;
}[];
const components: ComponentList = [
  {
    name: "HeatGrid",
    component: <HeatGrid gridValues={mockHeatGrid} />
  },
  {
    name: "TaskList",
    component: <TaskList tasks={mockTasks.tasks} />
  },
  {
    name: "MessageThread",
    component: <MessageThread messages={fakeMessages} />
  },
  {
    name: "TabDescriptor",
    component: <TabDescriptor users={mockUsers} />
  }
];

export default function ComponentSelector() {
  const fallbackComponent = <></>;
  const [currentComponent, setCurrentComponent] = useState(fallbackComponent);

  return (
    <>
      <div className="w-full mt-10 flex justify-center items-center gap-3">
        {components.map(component => {
          return (
            <button
              className="bg-slate-400 rounded-lg h-10 w-40"
              onClick={() => setCurrentComponent(component.component)}
            >
              {component.name}
            </button>
          );
        })}
      </div>
      <div className="mt-10 justify-center flex">
        {currentComponent || fallbackComponent}
      </div>
    </>
  );
}
