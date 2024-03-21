"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const defaultNote = {
  id: crypto.randomUUID(),
  title: "Welcome to my Notion!",
  content:
    "I kinda just made this for practice purposes, but you're welcome to use it if you find this useful or interesting at all :)",
};

export default function Setup() {
  const router = useRouter();

  useEffect(() => {
    if (!window.localStorage.getItem("notes")) {
      window.localStorage.setItem("notes", JSON.stringify([defaultNote]));
      window.localStorage.setItem("lastAccessed", defaultNote.id);
      router.replace(`/${defaultNote.id}`);
    } else {
      router.replace(`/${window.localStorage.getItem("lastAccessed")}`);
    }
  }, [router]);

  return <></>;
}
