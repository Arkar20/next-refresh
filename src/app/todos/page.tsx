import React from "react";
import TodoList from "./components/TodoList";
import { todos } from "./types";

export default function page() {
    return (
        <div>
            <h3>Todo App</h3>
            <TodoList todos={todos} />
        </div>
    );
}
