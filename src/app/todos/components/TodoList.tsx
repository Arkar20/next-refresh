"use client";

import React, { useOptimistic } from "react";
import { addTodo } from "../action";
import { Todo } from "../types";

export default function TodoList({ todos }: { todos: Todo[] }) {
    const [optimisticMessages, addOptimisticMessage] = useOptimistic<
        Todo[],
        string
    >(todos, (state, newMessage) => {
        return [
            ...state,
            { id: todos.length + 1, name: newMessage, status: true },
        ];
    });

    async function create(formData: FormData) {
        const name = formData.get("name") as string;

        addOptimisticMessage(name);

        await addTodo(name);
    }

    return (
        <>
            <form action={create}>
                <input type="text" placeholder="enter..." name="name" />
            </form>

            <ul>
                {optimisticMessages.map((todo) => (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </>
    );
}
