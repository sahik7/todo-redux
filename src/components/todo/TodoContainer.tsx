import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

export default function TodoContainer() {
    return (
        <div><div className="flex justify-between mb-5">

            <AddTodoModal />
            <button>Filter</button>
        </div>
            <div className="bg-primary-gradient w-full h-full rounded-md p-[3px]">
                {/* <div className="bg-white p-3 text-center rounded-md text-2xl font-bold"><p>There is no task pending</p></div> */}
                <div className="bg-white  space-y-5 rounded-md p-3 w-full h-full">
                    <TodoCard />
                </div>
            </div>
        </div>
    )
}
