import Image from "next/image";
import { connectDB } from "./database/index.js";
import CekResi from "./cek_resi/page.js";

export default function Home() {
  return <CekResi />;
}
