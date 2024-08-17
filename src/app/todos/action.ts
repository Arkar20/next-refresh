"use server";
import { prisma } from "@/db/prisma"
import { revalidatePath } from "next/cache";

export const addTodo = async (name: string) => {
    await prisma.todo.create({
        data: {
            name: name,
            status: true
        }
    })
    revalidatePath('/todos')
}
