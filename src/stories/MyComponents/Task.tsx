import "../../index.css"
import { useState } from 'react'

export type TaskProps = {
    name: string,
    id: string,
    description: string,
    completed: boolean,
}
export default function Task({name, description, completed}:TaskProps) {
    const [complete, setComplete] = useState(completed)
    const taskBg = complete ? 'bg-[#E2FFE5]':'bg-[#FFFFFF]'
    const boxBg = complete ? 'bg-[#359845]':'bg-[#FFFFFF]'

    const toggleComplete = () => {
        setComplete(!complete);
    }
    return (
        <div className={`${taskBg} w-[462px] border rounded-lg p-3`}>
            <div className="flex items-center ">
                <button 
                    onClick={toggleComplete}
                    className={`${boxBg} w-[25px] h-[25px] mx-2 rounded-lg border border-[#D8D8D8]`}>
                </button>
                <div className="flex flex-col">
                    <div>
                        {name}
                    </div>
                    <div className="text-[#7D7D7D] text-sm">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}