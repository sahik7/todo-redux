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
        }
    }
})


export const { addTodo } = todoSlice.actions


export default todoSlice.reducer;