import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

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
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos.filter(item => item.id !== action.payload)
        }
    }
})


export const { addTodo, removeTodo } = todoSlice.actions


export default todoSlice.reducer;