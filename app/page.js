import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "./todolist/page";

export const metadata ={
    title: 'Home'
}

export default function Home() {
  return (
   <div>
    <h1 className="text-center text-primary mt-5 mb-5 fw-bold">hello </h1>
   </div>
  );
}
