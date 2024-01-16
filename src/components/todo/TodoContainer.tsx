import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { ITodo } from "@/redux/features/todoSlice";
import { useState } from "react";

export default function TodoContainer() {
    const [priority, setPriority] = useState()

    const { data: todos, isLoading } = useGetTodosQuery(priority)
    if (isLoading) {
        return <p className="text-3xl text-blue-700 text-center">Loading...</p>
    }
    return (
        <div><div className="flex justify-between mb-5">

            <AddTodoModal />
            <TodoFilter priority={priority} setPriority={setPriority} />
        </div>
            <div className="bg-primary-gradient w-full h-full rounded-md p-[3px]">
                {/* <div className="bg-white p-3 text-center rounded-md text-2xl font-bold"><p>There is no task pending</p></div> */}
                <div className="bg-white  space-y-5 rounded-md p-3 w-full h-full">
                    {
                        todos?.data?.map((todo: ITodo) => <TodoCard key={todo._id} id={todo._id} title={todo.title} description={todo.description} isCompleted={todo.isCompleted} priority={todo.priority} />)
                    }
                </div>
            </div>
        </div>
    )
}
