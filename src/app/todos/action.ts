"use server";

import { Todo } from "./types";
import { todos } from "./types";


export const addTodo = async (name: string) => {
    const todo: Todo = {
        id: todos.length + 1,
        name,
        status: true,
    };
    todos.push(todo);

    return {
        message: 'success'
    }
}
