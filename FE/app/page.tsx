'use client';
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div>
        Muzii
      </div>
      <div>
        <button className="m-2 p-2 bg-blue-400" onClick={()=>signIn()}>Sign In</button>
      </div>

    </div>
  );
}
