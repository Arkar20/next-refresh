"use client";

import React, { useOptimistic, useRef } from "react";
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

    const create = async (formData: FormData) => {
        try {
            const name = formData.get("name") as string;

            addOptimisticMessage(name);

            form.current?.reset();

            await addTodo(name);
        } catch (error) {
            alert("something went wrong");
        }
    };

    const form = useRef<HTMLFormElement>(null);

    return (
        <>
            <form action={create} ref={form}>
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
