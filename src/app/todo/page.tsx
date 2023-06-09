"use client";
import MainComponent from "@/components/Main.Content";
import { useSession } from "next-auth/react";


export default function Todo() {

  const { data: session, status } = useSession({
    required: true,
  })

  return (
    <section className="flex flex-col items-center pt-20">
      <MainComponent />
    </section>
  );
}



