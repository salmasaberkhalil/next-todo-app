
// "use server";

// import { connectDB } from "../_lib/mongo";


// export async function addTodo(formData) {
//   const title = formData.get("title");

//   if (!title) return;

//   const db = await connectDB();
//   await db.collection("todos").insertOne({
//     title,
//     status: "pending",
//     createdAt: new Date(),
//   });
// }
