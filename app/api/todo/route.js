import { dbConnection } from "@/app/_lib/dbconnnection";
import { todoModel } from "@/app/_lib/models/todo";

dbConnection()

export async function GET(){
    try {
        const todos = await todoModel.find()
        return new Response(JSON.stringify({data:todos}),{status:200})
    } catch (error) {
        return new Response(JSON.stringify({message:"error getting data"}),{status:200})
    }
}