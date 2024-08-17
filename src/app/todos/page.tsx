import React from "react";
import TodoList from "./components/TodoList";
import { prisma } from "@/db/prisma";

export default async function page() {
    const todos = await prisma.todo.findMany();

    return (
        <div>
            <h3>Todo App</h3>
            <TodoList todos={todos} />
        </div>
    );
}
