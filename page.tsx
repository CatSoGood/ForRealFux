// src/app/page.tsx

import { redirect } from "next/navigation";

export default function Home() {
  // ทำการ redirect ไปที่หน้า login
  redirect("/login");
  return null; // ต้องมี return แต่ไม่ต้องแสดงอะไร
}