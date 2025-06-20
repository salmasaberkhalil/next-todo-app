// app/api/todo/route.js
import { todoModel } from "@/app/_lib/models/todo";
import { connectDB } from "@/app/_lib/mongo";


export async function GET() {
  try {
    await connectDB();
    const todos = await todoModel.find();
    return new Response(JSON.stringify({ data: todos }), {
      status: 200,
    });
  } catch (error) {
    console.error(" Error fetching todos:", error);
    return new Response(
      JSON.stringify({ message: "Error getting data" }),
      { status: 500 }
    );
  }
}


export async function POST(req) {
  try {
    const { title } = await req.json();

    if (!title) {
      return new Response(JSON.stringify({ message: "Title is required" }), {
        status: 400,
      });
    }

    await connectDB();
    const newTodo = await todoModel.create({
      title,
      status: "todo",
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Todo created", todo: newTodo }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    return new Response(
      JSON.stringify({ message: "Error creating todo" }),
      { status: 500 }
    );
  }
}
