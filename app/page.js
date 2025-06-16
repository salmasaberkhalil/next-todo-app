import Image from "next/image";
import styles from "./page.module.css";
import UsersPage from "./users/page";

export const metadata ={
    title: 'Home'
}

export default function Home() {
  return (
   <div>
    <UsersPage/>
   </div>
  );
}
