import Image from "next/image";
import styles from "./page.module.css";

import { Header } from "./Components/Header/Header";



export default function Home() {
  return (
    <main className={styles.main}>
      <Header buttons={["botao"]} />
    </main>
  );
}
