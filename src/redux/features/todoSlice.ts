import { createSlice } from "@reduxjs/toolkit";

export interface ITodo {
    _id: string;
    isCompleted: boolean;
    title: string;
    description: string;
    dateTime: string;
    priority: "high" | "medium" | "low";
};

interface IInitialState {
    todos: ITodo[]
}

const initialState: IInitialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // addTodo: (state, action: PayloadAction<ITodo>) => {
        //     state.todos.push({ ...action.payload, isCompleted: false })
        // },
        // removeTodo: (state, action: PayloadAction<string>) => {
        //     state.todos = state.todos.filter(item => item.id !== action.payload)
        // },
        // toggleComplete: (state, action: PayloadAction<string>) => {
        //     const task = state.todos.find(item => item.id === action.payload)
        //     task!.isCompleted = !task?.isCompleted;
        //     const index = state.todos.findIndex((todo) => todo.id === action.payload);
        //     if (task?.isCompleted) {
        //         const [removedItem] = state.todos.splice(index, 1);
        //         state.todos.push(removedItem);
        //     } else {
        //         const [removedItem] = state.todos.splice(index, 1);
        //         state.todos.unshift(removedItem);
        //     }
        // }
    }
})


// export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions


export default todoSlice.reducer;