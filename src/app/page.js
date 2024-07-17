import Image from "next/image";
import styles from "./page.module.css";
import Users from "@/components/Users";
import Photos from "@/components/Photos";
import Posts from "@/components/Posts";

export default function App() {
  return (
    <div>
      <Users />
      <Photos />
      <Posts />

    </div>
  );
}
