import { todoModel } from "@/app/_lib/models/todo"
import { connectDB } from "@/app/_lib/mongo"

export async function DELETE(req, {params}) {
   try {
     const id = params.id
     await connectDB()
     await todoModel.findByIdAndDelete(id)
     return new Response(JSON.stringify({message:"deleted"}),{status:200})
   } catch (err) {
    return new Response(JSON.stringify({message:`error deleting task ${err}`}),{status:500})
   }
}